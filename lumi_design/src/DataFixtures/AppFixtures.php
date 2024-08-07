<?php

namespace App\DataFixtures;

use App\Factory\CategoryFactory;
use App\Factory\OrderItemFactory;
use App\Factory\OrdersFactory;
use App\Factory\ProductFactory;
use App\Factory\UserFactory;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

// *other method using symfony console make:factory

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        CategoryFactory::createMany(5);
        ProductFactory::createMany(20, function() {
            return [
                'category' => CategoryFactory::random(),
            ];
        });

        UserFactory::createMany(10);
        OrdersFactory::createMany(14, function() {
            return [
                'customer' => UserFactory::random(),
            ];
        });
        OrderItemFactory::createMany(5, function() {
            return [
                'orders' => OrdersFactory::random(),
                'product' => ProductFactory::random(),
            ];
        });
    }

    
}
