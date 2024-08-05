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
        // dd($this->getUser());
        $pagination = $respository->paginateProductsOrderedByUpdatedAt(
            $request->query->getInt('page', 1)
        );

        return $this->render('front/home/index.html.twig', [
            'products' => $pagination
        ]);
    }

    #[Route('/detail/{slug}', name: 'show')]
    public function show(ProductRepository $repository, string $slug): Response
    {
        $product = $repository->findWithCategory($slug);
        return $this->render('front/home/show.html.twig', [
            'product' => $product
        ]);
    }
}
