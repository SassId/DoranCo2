<?php

namespace App\Controller\Admin;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/admin', name: 'admin_')]

class HomeController extends AbstractController
{
#[Route('/accueil', name: 'home')]
public function home()
{
   return $this->render('/admin/home/index.html.twig');
}
}