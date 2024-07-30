<?php

namespace App\Controller\Admin;

use App\Repository\ProductRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/admin/product', name: 'admin_product_')]
class ProductController extends AbstractController
{
    private ProductRepository $repository;

    public function __construct(ProductRepository $repository)
    {
        $this->repository = $repository;
    }

    #[Route('/', name: 'index')]
    public function index(Request $request): Response
    {
        $pagination = $this->repository->paginateProducts(
            $request->query->getInt('page', 1)
        );
        return $this->render('admin/product/index.html.twig', [
            'products' => $pagination
        ]);
    }
}
