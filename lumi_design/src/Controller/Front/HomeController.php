<?php

namespace App\Controller\Front;

use App\Repository\ProductRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/home', name:'front_home_')]
class HomeController extends AbstractController
{
    #[Route('/', name: 'index')]
    public function index(ProductRepository $respository): Response
    {

        return $this->render('front/home/index.html.twig', [
            'products' => $respository->findAll()
        ]);
    }
}
