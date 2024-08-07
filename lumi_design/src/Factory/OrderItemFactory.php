<?php

namespace App\Factory;

use App\DataFixtures\ProductFixtures;
use App\Entity\OrderItem;
use App\Entity\Product;
use Doctrine\Common\DataFixtures\ReferenceRepository;
use Zenstruck\Foundry\Persistence\PersistentProxyObjectFactory;

/**
 * @extends PersistentProxyObjectFactory<OrderItem>
 */
final class OrderItemFactory extends PersistentProxyObjectFactory
{
    /**
     * @see https://symfony.com/bundles/ZenstruckFoundryBundle/current/index.html#factories-as-services
     *
     * @todo inject services if required
     */

    private $referenceRepository;

    public function __construct()
    {
    }

    public static function class(): string
    {
        return OrderItem::class;
    }

    /**
     * @see https://symfony.com/bundles/ZenstruckFoundryBundle/current/index.html#model-factories
     *
     * @todo add your default values here
     */
    protected function defaults(): array|callable
    {
        return [
            'orders' => OrdersFactory::new(),
            'product' => ProductFactory::new(),
            'price' => self::faker()->randomFloat(2, 10, 100),
            'quantity' => self::faker()->numberBetween(1, 10),
        ];
    }

    // private function getRandomProduct(): Product
    // {
    //     $randomIndex = random_int(0, 24); // Adjust this if you have more or fewer products
    //     return $this->referenceRepository->getReference(ProductFixtures::PRODUCT_REFERENCE . $randomIndex);
    // }

    /**
     * @see https://symfony.com/bundles/ZenstruckFoundryBundle/current/index.html#initialization
     */
    protected function initialize(): static
    {
        return $this
            // ->afterInstantiate(function(OrderItem $orderItem): void {})
        ;
    }
}
