<?php

namespace App\EntityListener;

use App\Entity\Orders;
use App\Utils\OrderNumberGenerator;
use DateTime;
use DateTimeImmutable;
use Doctrine\Bundle\DoctrineBundle\Attribute\AsEntityListener;

#[AsEntityListener(event: 'prePersist', entity: Orders::class, method: 'onPrePersist')]
class OrderListener
{
    public function onPrePersist(Orders $orders)
    {
        $this->generateOrderNumber($orders);
    }

    private function generateOrderNumber(Orders $orders)
    {
        $orders->setOrderNumber(
            strtoupper(
                'ld' . (new DateTimeImmutable())->format('ymd') . OrderNumberGenerator::generateOrderNumber())
            );
    }
}
