<?php

namespace App\Service;

use App\Entity\OrderItem;
use App\Entity\Orders;
use App\Entity\User;
use App\Enum\OrdersStatus;
use App\Repository\ProductRepository;
use App\Utils\OrderNumberGenerator;

class OrdersService
{
    public function __construct(private ProductRepository $repository) {}

    public function saveNewOrder($cart, User $user)
    {
        $order = new Orders();
        $order
            // ->setOrderNumber(OrderNumberGenerator::generateOrderNumber())
            ->setCustomer($user);

        $total = 0;

        foreach ($cart as $id => $quantity) {
            $product = $this->repository->find($id);
            $price = $product->getPrice();
            $total = $total + ($price * $quantity);
            $orderItem = new OrderItem();
            $orderItem
                ->setQuantity($quantity)
                ->setProduct($product)
                ->setPrice($product->getPrice());
            $order->addOrderItem($orderItem);
        }
        $order->setTotal($total);

        return $order;
    }

    public function changeOrderStatus($order, $enumStatus)
    {
        $order->setStatus($enumStatus);
    }
}
