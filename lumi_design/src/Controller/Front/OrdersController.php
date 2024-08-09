<?php

namespace App\Controller\Front;

use App\Entity\Orders;
use App\Enum\OrdersStatus;
use App\Repository\OrdersRepository;
use App\Repository\ProductRepository;
use App\Security\EmailVerifier;
use App\Service\CartService;
use App\Service\EmailService;
use App\Service\InvoiceService;
use App\Service\OrdersService;
use DateTimeImmutable;
use Doctrine\ORM\EntityManagerInterface;
use Dompdf\Dompdf;
use PHPStan\PhpDocParser\Ast\Type\ThisTypeNode;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Address;
use Symfony\Component\Notifier\Notification\EmailNotificationInterface;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Routing\Requirement\Requirement;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[Route(path: '/commandes', name: 'front_orders_')]
#[IsGranted('ROLE_USER')]
class OrdersController extends AbstractController
{
    public function __construct(private OrdersRepository $repository) {}

    #[Route('/', name: 'index', methods: ['GET'])]
    public function index(Request $request): Response
    {
        $pagination = $this->repository->paginateOrders(
            $request->query->getInt('page', 1)
        );

        return $this->render('front/orders/index.html.twig', [
            'orders' => $pagination
        ]);
    }

    #[Route(path: '/nouvelle/', name: 'new', requirements: [
        'id' => Requirement::DIGITS
    ])]
    // #[IsGranted('IS_AUTHENICATED')]
    public function new(EntityManagerInterface $em, Request $request, SessionInterface $session, ProductRepository $repository, CartService $cartService, OrdersService $ordersService)
    {
        $this->denyAccessUnlessGranted('IS_AUTHENTICATED');

        $cart = $session->get('cart', []);

        if (empty($cart)) {
            $this->addFlash('warning', 'Veuillez ajouter un article à votre panier');
            return  $this->redirectToRoute('front_cart_index');
        }

        $user = $this->getUser();

        $order = $ordersService->saveNewOrder($cart, $user);

        $em->persist($order);
        $em->flush();

        $cartService->emptyCart();

        $this->addFlash('success', 'Veuillez finaliser votre commande');

        return $this->redirectToRoute('front_orders_confirmation', [
            'id' => $order->getId()
        ]);
    }

    #[Route(path: '/confirmation/{id}', name: 'confirmation', methods: ['GET'], requirements: ['id' => Requirement::POSITIVE_INT])]
    public function confirmation($id, OrdersRepository $repository): Response
    {
        $order = $repository->findOrderWithRelations($id);

        return $this->render('front/orders/confirmation.html.twig', [
            'order' => $order
        ]);
    }

    #[Route(path: '/payer/{id}', name: 'pay', methods: ['GET'], requirements: ['id' => Requirement::POSITIVE_INT])]
    public function pay(int $id, OrdersRepository $repository, EntityManagerInterface $em,EmailService $emailService, InvoiceService $invoiceService)
    {
        $payment = true;

        if (!$payment) {
            return $this->redirectToRoute('front_orders_confirmation');
        }

        $order = $repository->findOrderWithRelations($id);
        // dd($order);
        $order->setStatus(OrdersStatus::PAID);
        $order->setPaidAt(new DateTimeImmutable());
        $em->flush();

        $emailService->sendOrderConfirmationEmail($order);

        
        $pdf = $invoiceService->generateInvoice($order);
        // dd($pdf);

        $invoiceService->saveInvoice($pdf, $order);
        
        $this->addFlash('success', 'Votre commande à bien été prise en compte et un email de confirmation a été envoyé.');

        // return $this->render('front/orders/confirmation.html.twig', [
        //     'order' => $order
        // ]);

        return $this->redirectToRoute('front_home_index');
    }
}
