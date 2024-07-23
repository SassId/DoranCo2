<?php

namespace App\DataFixtures;

use App\Entity\Recipe;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\String\Slugger\SluggerInterface;

class RecipeFixtures extends Fixture
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
            $recipe = new Recipe();
            $recipe->setName($faker->foodName());
            $slug = $this->slugger->slug($recipe->getName())->lower();
            $recipe->setSlug($slug);
            $recipe->setDescription($faker->text($maxNbChars = 200));
            $recipe->setDuration($faker->numberBetween(1, 60));
            $recipe->setNumberOfPlates($faker->numberBetween(1, 10));
            $recipe->setDifficulty($faker->numberBetween(1, 5));
            $recipe->setPrice($faker->randomFloat(2, 1, 100));
            $recipe->setFavorite($faker->boolean());

            $manager->persist($recipe);
        }

        $manager->flush();
    }
}
