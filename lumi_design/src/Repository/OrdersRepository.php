<?php

namespace App\Repository;

use App\Entity\Orders;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;
use Knp\Component\Pager\PaginatorInterface;

/**
 * @extends ServiceEntityRepository<Orders>
 */
class OrdersRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry, private PaginatorInterface $paginator)
    {
        parent::__construct($registry, Orders::class);
    }

    public function paginateOrders(int $page)
    {
        return $this->paginator->paginate(
            $this->createQueryBuilder('o')
                ->andWhere(),
            $page,
            10
        );
    }

    public function paginateOrdersByUserId(int $userId, int $page)
    {
        return $this->paginator->paginate(
            $this->createQueryBuilder('o')
            ->where('o.customer.id = :userId')
            ->setParameter('userId', $userId)
            ->orderBy('o.createdAt', 'DESC')
            ->getQuery()
            ->getResult(), 
            $page, 
            10
        );
    }

    public function findOrderWithRelations(int $id): ?Orders
    {
        return $this->createQueryBuilder('o')
            ->join('o.customer', 'c')
            ->addSelect('c')
            ->leftJoin('o.orderItems', 'oi') // Join with OrderItem
            ->addSelect('oi')
            ->leftJoin('oi.product', 'p')
            ->addSelect('p')
            ->where('o.id = :id')
            ->setParameter('id', $id)
            ->getQuery()
            ->getOneOrNullResult();
    }

    //    /**
    //     * @return Orders[] Returns an array of Orders objects
    //     */
    //    public function findByExampleField($value): array
    //    {
    //        return $this->createQueryBuilder('o')
    //            ->andWhere('o.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->orderBy('o.id', 'ASC')
    //            ->setMaxResults(10)
    //            ->getQuery()
    //            ->getResult()
    //        ;
    //    }

    //    public function findOneBySomeField($value): ?Orders
    //    {
    //        return $this->createQueryBuilder('o')
    //            ->andWhere('o.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->getQuery()
    //            ->getOneOrNullResult()
    //        ;
    //    }
}
