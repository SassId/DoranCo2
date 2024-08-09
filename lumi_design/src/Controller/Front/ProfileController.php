<?php

namespace App\Controller\Front;

use App\Entity\User;
use App\Repository\OrdersRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[Route(path: '/profile', name: 'front_profile_')]
#[IsGranted('ROLE_USER')]
class ProfileController extends AbstractController
{
    public function __construct(private OrdersRepository $repository)
    {
    }

    #[Route('/', name: 'index', methods: ['GET'])]
    public function index(Request $request): Response
    {
        $user = $this->getUser(); // can't find the ->getId()
        dd($user);
        
        $this->repository->paginateOrdersByUserId( );

        return $this->render('front/profile/index.html.twig');
    }
}
