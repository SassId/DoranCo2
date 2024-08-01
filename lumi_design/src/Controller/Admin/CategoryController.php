<?php

namespace App\Controller\Admin;

use App\Entity\Category;
use App\Form\CategoryType;
use App\Repository\CategoryRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('admin/category', name:'admin.category.')]
class CategoryController extends AbstractController
{
private CategoryRepository $repository;

public function __construct(CategoryRepository $repository)
{
    $this->repository = $repository;
}

    #[Route('/', name: 'index')]
    public function index(Request $request): Response
    {
        $pagination = $this->repository->paginateProductsOrderedByName($request->query->getInt('page', 1));
        return $this->render('admin/category/index.html.twig', [
            'categories' => $pagination,
        ]);
    }

    // #[Route('/details/{id}', name: 'show')]
    // public function show(Category $category)
    // {
    //     return $this->render('admin/category/show.html.twig', [
    //         'category' => $category
    //     ]);
    // }

    #[Route('/ajouter', name: 'create', methods: ['GET', 'POST'])]
    public function create(EntityManagerInterface $em, Request $request): Response
    {
        $category = new Category();
        $form = $this->createForm(CategoryType::class, $category);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em->persist($category);
            $em->flush();
            $this->addFlash('success', 'Votre catégorie à bien été ajoutée !');

            return $this->redirectToRoute('admin.category.index');
        }

        return $this->render('admin/product/create.html.twig', [
            'form' => $form
        ]);
    }

    #[Route('/modifier/{id}', name: 'edit', methods: ['GET', 'POST'])]
    public function edit(EntityManagerInterface $em, Request $request, Category $category): Response
    {

        $form = $this->createForm(CategoryType::class, $category);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            $em->flush();
            $this->addFlash('success', 'Votre catégorie à bien été modifiée !');

            return $this->redirectToRoute('admin.category.index');
        }

        return $this->render('admin/category/edit.html.twig', [
            'form' => $form
        ]);
    }

    #[Route('/supprimer/{id}', name: 'delete', methods: ['DELETE'])]
    public function delete(Category $category, EntityManagerInterface $em)
    {
        $em->remove($category);
        $em->flush();
        $this->addFlash('success', 'votre produit a bien été suprimé');


        return $this->redirectToRoute('admin.category.index');
    }

}
