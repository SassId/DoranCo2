<?php

namespace App\Controller\Front;

use App\Repository\ProductRepository;
use App\Service\CartService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Routing\Requirement\Requirement;

#[Route(path: '/front/panier', name: 'front_cart_')]
class CartController extends AbstractController
{
    #[Route('/', name: 'index')]
    public function index(CartService $cartService): Response
    {
        $data = $cartService->getCartContent();
        // dd($cartData);

        return $this->render('front/cart/index.html.twig', [
            'cartData' => $data['cartData'],
            'totalPrice' => $data['totalPrice']
        ]);
    }

    #[Route(path: '/ajouter/{id}', name: 'add', methods: ['GET'], requirements: ['id' => Requirement::DIGITS])]
    public function add(CartService $cartService, $id)
    {
        $cartService->addProduct($id);

        return $this->redirectToRoute('front_cart_index');
    }

    #[Route(path: '/augmenter/{id}', name: 'increase', methods: ['GET'], requirements: ['id' => Requirement::DIGITS])]
    public function increase($id, CartService $cartService): Response
    {
        $cartService->addProduct($id);

        return $this->redirectToRoute('front_cart_index');
    }

    #[Route(path: '/diminuer/{id}', name: 'decrease', methods: ['GET'], requirements: ['id' => Requirement::DIGITS])]
    public function decrease($id, CartService $cartService): Response
    {
        $cartService->decreaseProductQuantity($id);

        return $this->redirectToRoute('front_cart_index');
    }

    #[Route(path: '/supprimer/{id}', name: 'remove', methods: ['GET'], requirements: ['id' => Requirement::DIGITS])]
    public function remove($id, CartService $cartService): Response
    {
        $cartService->removeProduct($id);

        return $this->redirectToRoute('front_cart_index');
    }

    #[Route(path: '/supprimer-panier/', name: 'empty-cart', methods: ['GET'])]
    public function emptyCart(CartService $cartService): Response
    {
        $cartService->emptyCart();

        return $this->redirectToRoute('front_cart_index');
    }
}
