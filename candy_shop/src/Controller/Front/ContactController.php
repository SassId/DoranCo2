<?php

namespace App\Controller\Front;

use App\DTO\ContactDTO;
use App\Form\ContactType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/front', name: 'front_home_')]
class ContactController extends AbstractController
{
    #[Route('/contact', name: 'contact')]
    public function contact(Request $request): Response
    {
      $form = $this->createForm(ContactType::class);
      $form->handleRequest($request);

      if ($form->isSubmitted() && $form->isValid())
      {
        $this->addFlash('success', 'Your message has been sent !');
        $this->addFlash('success', 'We\ll get back to you as soon as possible.');
        
        return $this->redirectToRoute('front_home_index');
      }

       return $this->render('front/home/contact.html.twig', [
        'form' => $form
       ]);
    }
}
