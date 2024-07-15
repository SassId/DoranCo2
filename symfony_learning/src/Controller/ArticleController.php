<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\HttpFoundation\Response;

class ArticleController extends AbstractController
{
    #[Route('/article', name: 'article_index')]
    public function index(): Response
    {
        return $this->render('article/index.html.twig');
    }
}
