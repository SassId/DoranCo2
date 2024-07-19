<?php

namespace App\DataFixtures;

use App\Entity\Candy;
use DateTimeImmutable;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\String\Slugger\SluggerInterface;

class CandyFixtures extends Fixture
{
    private $slugger;

    public function __construct(SluggerInterface $slugger,)
    {
        $this->slugger = $slugger;
    }
    public function load(ObjectManager $manager): void
    {
        $faker = \Faker\Factory::create();
        $faker->addProvider(new \FakerRestaurant\Provider\en_US\Restaurant($faker));
        // create 100 candies! Bam!
        for ($i = 0; $i < 100; $i++) {
            $candy = new Candy();
            $candy->setName($faker->fruitName());
            $candy->setDescription($faker->text());
            $candy->setCreatedAt(new DateTimeImmutable());
            $slug = strtolower($candy->getName());
            $slug = $this->slugger->slug($slug);
            $candy->setSlug($slug);
            // $candy->setPrice(mt_rand(10, 100));
            $manager->persist($candy);
        }

        $manager->flush();
    }
}
