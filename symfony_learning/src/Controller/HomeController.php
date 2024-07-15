<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Routing\Requirement\Requirement;

class HomeController
{
    #[Route('/', name: 'home_index')]
    public function index(): Response
    {
        return new Response('Hello, World !');
    }

    #[Route('/hello/{name}', name: 'home_hello')]
    public function hello(Request $request): Response
    {
        // dd($request->get('name'));
        // or
        $name = $request->get('name');

        // return new Response('Bonjour, '.$request->get('name').  '!');
        // or
        return new Response('Bonjour, ' . $name .  '!');
    }

    #[Route('/greetings/{age}', name: 'home_greetings', requirements: ['age' => Requirement::DIGITS])]
    public function greetings(int $age): Response
    {
        return new Response('Hi, I\'m ' . $age . ' years old.');
    }
}
