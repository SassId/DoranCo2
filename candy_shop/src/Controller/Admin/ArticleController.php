<?php

namespace App\Controller\Admin;

use App\Entity\Candy;
use App\Form\CandyType;
use App\Repository\CandyRepository;
use DateTimeImmutable;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Routing\Requirement\Requirement;

#[Route('/admin/article', name: 'admin_article_')]
class ArticleController extends AbstractController
{
    private $em;
    private $candyRepository;

    public function __construct(EntityManagerInterface $em,  CandyRepository $candyRepository)
    {
        $this->em = $em;
        $this->candyRepository = $candyRepository;
    }

    #[Route('/home', name: 'index')]
    public function index(): Response
    {
        $candies = $this->candyRepository->findAll();
        return $this->render('admin/article/index.html.twig', [
            'candies' => $candies
        ]);
    }

    #[Route('/create', name: 'create')]
    public function create(Request $request): Response
    {
        $candy = new Candy;
        $form = $this->createForm(CandyType::class, $candy);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid())
        {
            $candy->setCreatedAt(new DateTimeImmutable());
            $this->em->persist($candy);
            $this->em->flush();
            $this->addFlash('success', 'Your new article has been created !');
            return $this->redirectToRoute('admin_article_index');
        }

        return $this->render('admin/article/create.html.twig', [
            'form' => $form
        ]);
    }

    #[Route('/update/{id}', name: 'update', requirements: ['id' => Requirement::DIGITS])]
    public function update(Candy $candy, Request $request): Response // example of DI (Dependency Injection made possible without instancing the object)
    {
        $form = $this->createForm(CandyType::class, $candy);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid())
        {
            $candy->setUpdatedAt(new DateTimeImmutable());
            $this->em->flush();
            $this->addFlash('success', 'Your changes have been saved !');
            return $this->redirectToRoute('admin_article_index');
        }
        return $this->render('admin/article/update.html.twig', [
            'form' => $form
        ]);
    }

    #[Route('/delete/{id}', name: 'delete', requirements: ['id' => Requirement::DIGITS])]
    public function delete(Candy $candy): Response
    {
       $this->em->remove($candy);
       $this->em->flush();
       $this->addFlash('success', 'Your article has been deleted !');

        return $this->redirectToRoute('admin_article_index');
    }
}
