<?php

namespace App\EntityListener;

use App\Entity\Product;
use Doctrine\Bundle\DoctrineBundle\Attribute\AsEntityListener;
use Doctrine\Persistence\Event\LifecycleEventArgs;
use Symfony\Component\String\Slugger\SluggerInterface;


#[AsEntityListener(event: 'prePersist', entity: Product::class)]
#[AsEntityListener(event: 'preUpdate', entity: Product::class)]
class ProductListener
{
    private $slugger;

    public function __construct(SluggerInterface $slugger)
    {
        $this->slugger = $slugger;
    }

    public function prePersist(Product $product, LifecycleEventArgs $args)
    {
        $this->generateSlug($product);
    }

    public function preUpdate(Product $product, LifecycleEventArgs $args)
    {
        $this->generateSlug($product);
    }

    private function generateSlug($product)
    {
        $product->setSlug($this->slugger->slug($product->getName())->lower());
    }
}
