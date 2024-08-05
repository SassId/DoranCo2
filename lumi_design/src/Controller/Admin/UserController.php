<?php

namespace App\Controller\Admin;

use App\Entity\User;
use App\Form\AdminCreationType;
use App\Form\UserType;
use App\Repository\UserRepository;
use App\Security\EmailVerifier;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mime\Address;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[Route(path: 'admin/user', name: 'admin_user_')]
class UserController extends AbstractController
{

    public function __construct(private UserRepository $repository)
    {
    }

    #[Route('/', name: 'index', methods: ['GET'])]
    public function index(Request $request): Response
    {
        $pagination = $this->repository->paginateUsersWithRoleUser(
            $request->query->getInt('page', 1)
        );
        return $this->render('admin/user/index.html.twig', [
            'users' => $pagination
        ]);
    }

    #[Route('/details/{id}', name: 'show')]
    public function show(?User $user)
    {
        return $this->render('admin/user/show.html.twig', [
            'user' => $user
        ]);
    }


    #[IsGranted('ROLE_SUPER_ADMIN')]
    #[Route('/creer', name: 'create', methods: ['GET', 'POST'])]
    public function createAdmin(Request $request, UserPasswordHasherInterface $userPasswordHasher, EntityManagerInterface $em, EmailVerifier $emailVerifier): Response
    {
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
            $user->setRoles(['ROLE_ADMIN']);

            $em->persist($user);
            $em->flush();
            $this->addFlash('success', 'Votre administrateur a bien été créé');

            // generate a signed url and email it to the user
            $emailVerifier->sendEmailConfirmation(
                'app_verify_email',
                $user,
                (new TemplatedEmail())
                    ->from(new Address('lumidesign@support.com', 'LumiDesign'))
                    ->to($user->getEmail())
                    ->subject('Veuillez confirmer votre e-mail')
                    ->htmlTemplate('registration/confirmation_email.html.twig')
                    ->context([
                        'user' => $user
                    ])
            );

            // do anything else you need here, like send an email

            return $this->redirectToRoute('admin_user_create');
        }

        return $this->render('admin/user/create.html.twig', [
            'form' => $form,
            // 'user' => $user
        ]);
    }

    #[Route('/modifier/{id}', name: 'edit', methods: ['GET', 'POST'])]
    public function edit(EntityManagerInterface $em, Request $request, User $user, UserPasswordHasherInterface $userPasswordHasher): Response
    {

        $form = $this->createForm(UserType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            $password = $form->get('plainPassword')->getData();
            if ($password) {
                $user->setPassword($userPasswordHasher->hashPassword($user, $password));
            }

            $em->flush();
            $this->addFlash('success', 'L\'utilisateur à bien été modifié !');

            return $this->redirectToRoute('admin_user_index');
        }

        return $this->render('admin/user/edit.html.twig', [
            'form' => $form
        ]);
    }

    #[Route('/supprimer/{id}', name: 'delete', methods: ['DELETE'])]
    public function delete(User $user, EntityManagerInterface $em)
    {
        $em->remove($user);
        $em->flush();
        $this->addFlash('success', 'L\'utilisateur a bien été suprimé');


        return $this->redirectToRoute('admin_user_index');
    }
}
