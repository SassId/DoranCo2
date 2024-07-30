<?php

namespace App\DataFixtures;

use App\Factory\CategoryFactory;
use App\Factory\ProductFactory;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

// *other method using symfony console make:factory

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        // CategoryFactory::createMany(5);
        // ProductFactory::createMany(20, function () {
        //     return [
        //         'category' => CategoryFactory::random(),
        //     ];
        // });
    }
}
