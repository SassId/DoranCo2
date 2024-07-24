<?php

namespace App\DataFixtures;

use App\Entity\Ingredient;
use DateTimeImmutable;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\String\Slugger\SluggerInterface;

class IngredientFixtures extends Fixture
{
    private $slugger;

    public function __construct(SluggerInterface $slugger)
    {
        $this->slugger = $slugger;
    }

    public function load(ObjectManager $manager): void
    {

        $faker = \Faker\Factory::create();
$faker->addProvider(new \FakerRestaurant\Provider\fr_FR\Restaurant($faker));
        for ($i = 0; $i < 50; $i++) {
            $ingredient = new Ingredient();
            $ingredient->setName($faker->vegetableName());
            $slug = $this->slugger->slug($ingredient->getName())->lower();
            $ingredient->setSlug($slug);
            $ingredient->setPrice(mt_rand(5, 1000) / 10);

            $manager->persist($ingredient);
            $this->addReference('INGREDIENT'. $i, $ingredient);
        }

        $manager->flush();
    }
}
