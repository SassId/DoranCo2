<?php

namespace App\Controller\Front;

use App\Entity\Orders;
use App\Repository\OrdersRepository;
use App\Utils\OrderNumberGenerator;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Routing\Requirement\Requirement;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[Route(path: '/commandes', name: 'front_orders_')]
#[IsGranted('ROLE_USER')]
class OrdersController extends AbstractController
{
    public function __construct(private OrdersRepository $repository)
    {
    }

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
    public function new(EntityManagerInterface $em, Request $request)
    {
        $order = new Orders();
        $order
            ->setOrderNumber(OrderNumberGenerator::generateOrderNumber())
            ->setCustomer($this->getUser());
        // ->addOrderItem();

        // dd($order);

        $em->persist($order);
        $em->flush();
        $this->addFlash('success', 'Votre commande à bien été prise en compte');

        return $this->redirectToRoute('');
    }
}
