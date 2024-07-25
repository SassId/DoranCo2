<?php

namespace App\DataFixtures;

use App\Entity\Ingredient;
use App\Entity\Recipe;
use App\Repository\IngredientRepository;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\String\Slugger\SluggerInterface;

class RecipeFixtures extends Fixture implements DependentFixtureInterface
{
    private $slugger;
    private $repository;

    public function __construct(SluggerInterface $slugger, IngredientRepository $repository)
    {
        $this->slugger = $slugger;
        $this->repository = $repository;
    }

    public function load(ObjectManager $manager): void
    {
        $faker = \Faker\Factory::create();
        $faker->addProvider(new \FakerRestaurant\Provider\fr_FR\Restaurant($faker));

        $ingredients = $this->repository->findAll();

        for ($i = 0; $i < 50; $i++) {
            $recipe = new Recipe();
            $recipe->setName($faker->foodName().$i);
            $slug = $this->slugger->slug($recipe->getName())->lower();
            $recipe->setSlug($slug);
            $recipe->setDescription($faker->text($maxNbChars = 200));
            $recipe->setDuration($faker->numberBetween(1, 60));
            $recipe->setNumberOfPlates($faker->numberBetween(1, 10));
            $recipe->setDifficulty($faker->numberBetween(1, 5));
            $recipe->setPrice($faker->randomFloat(2, 1, 100));
            $recipe->setFavorite($faker->boolean());
            // $ingredient = new Ingredient();
            for ($j = 0; $j < mt_rand(0,7); $j++)
            $recipe->addIngredient($this->getReference('INGREDIENT'. mt_rand(0,49)));

            $manager->persist($recipe);
        }

        $manager->flush();
    }
    
    public function getDependencies()
    {
        return [IngredientFixtures::class];
    }
}
