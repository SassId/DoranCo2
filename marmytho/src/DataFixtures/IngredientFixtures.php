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
        for ($i = 0; $i < 100; $i++) {
            $ingredient = new Ingredient();
            $ingredient->setName('ingredient ' . $i);
            $slug = $this->slugger->slug($ingredient->getName())->lower();
            $ingredient->setSlug($slug);
            $ingredient->setPrice(mt_rand(5, 1000) / 10);
            // $ingredient->setCreatedAt(new DateTimeImmutable());

            $manager->persist($ingredient);
        }

        $manager->flush();
    }
}
