<?php

namespace App\Controller\Admin;

use App\Entity\Category;
use App\Form\CategoryType;
use App\Repository\CategoryRepository;
use DateTimeImmutable;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Routing\Requirement\Requirement;

#[Route('/admin/category', name: 'admin_category_')]
class CategoryController extends AbstractController
{
    private $em;

    public function __construct(EntityManagerInterface $em)
    {
        $this->em = $em;
    }

    #[Route('/', name: 'index')]
    public function index(CategoryRepository $repository): Response
    {
        $categories = $repository->findAll();
        return $this->render('admin/category/index.html.twig', [
            'categories' => $categories
        ]);
    }

    #[Route('/create', name: 'create')]
    public function create(EntityManagerInterface $em, Request $request): Response
    {
        $category = new Category;
        $form = $this->createForm(CategoryType::class, $category);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $category->setCreatedAt(new DateTimeImmutable());
            $em->persist($category);
            $em->flush();
            $this->addFlash('success', 'Your new category has been created !');
            return $this->redirectToRoute('admin_category_index');
        }

        return $this->render('admin/category/create.html.twig', [
            'form' => $form
        ]);
    }

    #[Route('/update/{id}', name: 'update', requirements: ['id' => Requirement::DIGITS])]
    public function update(Category $category, Request $request): Response
    {

        $form = $this->createForm(CategoryType::class, $category);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $category->setUpdatedAt(new DateTimeImmutable());
            $this->em->flush();
            $this->addFlash('success', 'Your changes have been saved !');

            return $this->redirectToRoute('admin_category_index');
        }

        return $this->render('admin/category/update.html.twig', [
            'form' => $form

        ]);
    }

    #[Route('/delete/{id}', name: 'delete', requirements: ['id' => Requirement::DIGITS])]
    public function delete($id, CategoryRepository $repository, EntityManagerInterface $em): Response
    {
        $category = $repository->find($id);
        $em->remove($category);
        $em->flush();

        return $this->redirectToRoute('admin_category_index');
    }
}
