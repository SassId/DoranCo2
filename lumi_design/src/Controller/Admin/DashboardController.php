<?php

namespace App\Controller\Admin;

use App\Entity\User;
use App\Form\AdminCreationType;
use App\Security\EmailVerifier;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Attribute\Route;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\Mime\Address as MimeAddress;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[Route('/admin/dashboard', name: 'admin_dashboard_')]
class DashboardController extends AbstractController
{
    

    #[Route('/', name: 'index', methods: ['GET'])]
    public function index(Request $request): Response
    {
        
        return $this->render('admin/dashboard/index.html.twig');
    }

    #[IsGranted('ROLE_SUPER_ADMIN')]
    #[Route('/admin-creation', name: 'admin-creation', methods: ['GET', 'POST'])]
    public function createAdmin(Request $request, UserPasswordHasherInterface $userPasswordHasher, EntityManagerInterface $em, EmailVerifier $emailVerifier): Response
    {
        // $this->denyAccessUnlessGranted('ROLE_SUPER_ADMIN');
        $user = new User();
        $form = $this->createForm(AdminCreationType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            // encode the plain password
            $user->setPassword(
                $userPasswordHasher->hashPassword(
                    $user,
                    $form->get('plainPassword')->getData()
                )
            );
            $user->setRoles(['ADMIN']);

            $em->persist($user);
            $em->flush();
            $this->addFlash('success', 'Votre administrateur a bien été créé');

            // generate a signed url and email it to the user
            $emailVerifier->sendEmailConfirmation(
                'app_verify_email',
                $user,
                (new TemplatedEmail())
                    ->from(new MimeAddress('lumidesign@support.com', 'LumiDesign'))
                    ->to($user->getEmail())
                    ->subject('Veuillez confirmer votre e-mail')
                    ->htmlTemplate('registration/confirmation_email.html.twig')
                    ->context([
                        'user' => $user
                    ])
            );

            // do anything else you need here, like send an email

            return $this->redirectToRoute('admin_dashboard_index');
        }

        return $this->render('admin/dashboard/admin-creation.html.twig', [
            'form' => $form,
            // 'user' => $user
        ]);
    }
}