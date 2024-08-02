<?php

namespace App\Controller\Admin;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/admin', name: 'admin_')]
class DashboardController extends AbstractController
{
    

    #[Route('/', name: 'index', methods: ['GET'])]
    public function index(Request $request): Response
    {
        
        return $this->render('admin/index.html.twig');
    }
}