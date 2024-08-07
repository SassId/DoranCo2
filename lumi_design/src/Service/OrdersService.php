<?php

namespace App\Service;

use App\Entity\Orders;
use App\Utils\OrderNumberGenerator;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\HttpFoundation\RequestStack;

class OrdersService
{
   public function __construct(private Security $security)
   {
    
   }

    public function saveNewOrder()
    {
        $order = new Orders();
        $order
            ->setOrderNumber(OrderNumberGenerator::generateOrderNumber())
            ->setCustomer($this->security->getUser());
        // ->addOrderItem();

        // dd($order);
    }
}