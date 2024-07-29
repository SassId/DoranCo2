<?php

namespace App\EventListener;

use App\Entity\Product;
use Doctrine\Persistence\Event\LifecycleEventArgs;
use Symfony\Component\String\Slugger\SluggerInterface;

class SluggerListener
{
    private $slugger;

    public function __construct(SluggerInterface $slugger)
    {
        $this->slugger = $slugger;
    }

    public function prePersist(LifecycleEventArgs $args)
    {
        $this->generateSlug($args);
    }

    public function preUpdate(LifecycleEventArgs $args)
    {
        $this->generateSlug($args);
    }

    private function generateSlug($args)
    {
        $entity = $args->getObject();

        if (!$entity instanceof Product) {
            return;
        }

        $entity->setSlug($this->slugger->slug($entity->getName())->lower());
    }
}
