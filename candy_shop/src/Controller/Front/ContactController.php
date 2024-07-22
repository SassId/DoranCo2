<?php

namespace App\Controller\Front;

use App\DTO\ContactDTO;
use App\Form\ContactType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/front', name: 'front_home_')]
class ContactController extends AbstractController
{
  #[Route('/contact', name: 'contact')]
  public function contact(Request $request, MailerInterface $mailer): Response
  {
    $contact = new ContactDTO;
    $form = $this->createForm(ContactType::class, $contact);
    $form->handleRequest($request);

    if ($form->isSubmitted() && $form->isValid()) {
      $email = new Email();
      $email->from($contact->getEmail())
        ->to($contact->getService())
        //->cc('cc@example.com')
        //->bcc('bcc@example.com')
        //->replyTo('fabien@example.com')
        //->priority(Email::PRIORITY_HIGH)
        ->subject('Time for Symfony Mailer!')
        ->text($contact->getMessage())
        ->html('<p>See Twig integration for better HTML integration!</p>');

      $mailer->send($email);

      $this->addFlash('success', 'Your message has been sent !');
      $this->addFlash('success', 'We\'ll get back to you as soon as possible.');

      return $this->redirectToRoute('front_home_index');
    }

    return $this->render('front/home/contact.html.twig', [
      'form' => $form
    ]);
  }
}
