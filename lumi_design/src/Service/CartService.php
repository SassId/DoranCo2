<?php

namespace App\Service;

use App\Repository\ProductRepository;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\HttpFoundation\Session\Session;

class CartService
{
    public function __construct(private ProductRepository $repository, private RequestStack $requestStack)
    {
    }

    private function getSession()
    {
        return $this->requestStack->getSession();
    }

    public function getCartContent(): array
    {
        $cart = $this->getSession()->get('cart', []);
        $cartData = [];
        $totalPrice = 0;

        foreach ($cart as $productId => $quantity) {

            $product = $this->repository->find($productId);

            if (!$product) {
                continue;
            }
            $subtotal = $product->getPrice() * $quantity;

            $cartData[] = [
                'product' => $product,
                'quantity' => $quantity,
                'subtotal' => $subtotal,
            ];

            $totalPrice += $subtotal;
        }

        return [
            'cartData' => $cartData,
            'totalPrice' => $totalPrice
        ];
    }

    public function addProduct(int $id)
    {
        $cart = $this->getSession()->get('cart', []);
        if (!isset($cart[$id])) {
            $cart[$id] = 1;
        } else {
            $cart[$id]++;
        }

        $this->getSession()->set('cart', $cart);
    }

    public function decreaseProductQuantity(int $id)
    {
        $cart = $this->getSession()->get('cart', []);
        if (isset($cart[$id])) {
            if ($cart[$id] > 1) {
                $cart[$id]--;
            } else {
                unset($cart[$id]);
            }
        }

        $this->getSession()->set('cart', $cart);
    }

    public function removeProduct(int $id)
    {
        $cart = $this->getSession()->get('cart', []);
        if (isset($cart[$id])){
            unset($cart[$id]);
        }

        $this->getSession()->set('cart', $cart);
    }

    public function emptyCart()
    {
        $this->getSession()->remove('cart');
    }
}
