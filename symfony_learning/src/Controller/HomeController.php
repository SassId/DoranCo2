<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Routing\Requirement\Requirement;

class HomeController extends AbstractController
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

    // relates to the other way to create a route (routes.yaml)
    public function list(): Response
    {
        return new Response('Hi, I\'m a route created in yaml.');
    }

    #[Route('/template/{test}', name: 'home_templates')]
    public function template(string $test): Response
    {

        $animals = ['lions', 'tigers', 'wolves', 'eagles', 'goats'];

        return $this->render('home/index.html.twig', ['name' => 'Roo', 'key' => $test, 'animals' => $animals]);
    }
}
