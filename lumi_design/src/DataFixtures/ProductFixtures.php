<?php

namespace App\DataFixtures;

use App\Entity\Product;
use DateTimeImmutable;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\String\Slugger\AsciiSlugger;
use Symfony\Component\String\Slugger\SluggerInterface;

class ProductFixtures extends Fixture implements DependentFixtureInterface
{
    private $slugger;
    private $faker;
    public function __construct(SluggerInterface $slugger)
    {
        $this->slugger = $slugger;
        $this->faker = \Faker\Factory::create();
    }
    public function load(ObjectManager $manager): void
    {
        $this->faker->addProvider(new \Smknstd\FakerPicsumImages\FakerPicsumImagesProvider($this->faker));

        for ($i = 0; $i < 25; $i++) {
            $product = new Product();
            $product->setName('Product ' . $i)
                ->setPrice(mt_rand(10, 100))
                ->setDescription($this->faker->text(100))
                ->setPrice($this->faker->randomFloat(2, 1, 100))
                ->setStock($this->faker->numberBetween(0, 50))
                ->setImage($this->faker->imageUrl(width: 100, height: 100))
                ->setUpdatedAt(DateTimeImmutable::createFromMutable($this->faker->dateTimeBetween('-3 months')));
            // $slug = $this->slugger->slug($product->getName())->lower();
            // $product->setSlug($slug);
            $product->setCategory($this->getReference('CATEGORY' . mt_rand(0, 4)));

            $manager->persist($product);
        }

        $manager->flush();
    }
    public function getDependencies()
    {
        return [CategoryFixtures::class];
    }
}
