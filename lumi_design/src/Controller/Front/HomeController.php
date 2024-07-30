<?php

namespace App\Controller\Front;

use App\Entity\Product;
use App\Repository\ProductRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/home', name: 'front_home_')]
class HomeController extends AbstractController
{
    #[Route('/', name: 'index', methods: ['GET'])]
    public function index(ProductRepository $respository, Request $request): Response
    {
        $pagination = $respository->paginateProducts(
            $request->query->getInt('page', 1)
        );

        return $this->render('front/home/index.html.twig', [
            'products' => $pagination
        ]);

    }

    #[Route('/detail/{id}', name: 'show')]
    public function show(ProductRepository $repository, Product $product): Response
    {
        return $this->render('front/home/show.html.twig', [
            'product' => $product
        ]);
    }

    // // * Pagination Method:
    // #[Route('/', name: 'index')]
    // public function index(ProductRepository $respository, Request $request): Response
    // {
    //     $page = $request->query->getInt('page', 1);

    //     $products = $respository->paginateProducts($request);
    //     $maxPage = ceil($products->count() / 5); //ceil() rounds to superior after comma
    //     return $this->render('front/home/index.html.twig', [
    //         'products' => $products,
    //         'maxPage' => $maxPage, 
    //         'page' => $page
    //     ]);


    // }
}
