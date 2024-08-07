<?php

namespace App\Utils;

use \Faker\Factory as FakerFactory;

class OrderNumberGenerator
{
    public static function generateOrderNumber(): string
    {
        $faker = FakerFactory::create();
        return strtoupper($faker->bothify('?###?#####'));
    }
}
