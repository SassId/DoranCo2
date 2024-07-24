<?php

namespace App\Controller\Admin;

use App\Entity\Recipe;
use App\Form\RecipeType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use App\Repository\RecipeRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\String\Slugger\SluggerInterface;

#[Route('admin/recette', name: 'admin_recipe_')]
class RecipeController extends AbstractController
{
    #[Route('/', name: 'index', methods: ['GET'])]
    public function index(RecipeRepository $repository): Response
    {
        $recipes = $repository->findAll();

        return $this->render('admin/recipe/index.html.twig', [
            'recipes' => $recipes
        ]);
    }

    #[Route('/details/{id}', name: 'show', methods: ['GET'])]
    public function show(Recipe $recipe)
    {
        return $this->render('admin/recipe/show.html.twig', [
            'recipe' => $recipe
        ]);
    }

    #[Route('/ajouter', name: 'create')]
    public function create(EntityManagerInterface $em, Request $request, SluggerInterface $slugger)
    {
        $recipe = new Recipe();
        $form = $this->createForm(RecipeType::class, $recipe);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $file = $form->get('thumbnailFile')->getData();

            if ($file) {
                $fileDir = $this->getParameter('kernel.project_dir') . '/public/img/thumbnail';
                $fileName = $recipe->getSlug() . '.' . $file->getClientOriginalExtension();
                $file->move($fileDir, $fileName);
                $recipe->setFileName($fileName);
            }

            $em->persist($recipe);
            $em->flush();

            return $this->redirectToRoute('admin_recipe_index');
        }

        return $this->render('admin/recipe/create.html.twig', [
            'form' => $form
        ]);
    }

    #[Route('/editer/{id}', name: 'edit')]
    public function edit(EntityManagerInterface $em, Request $request, SluggerInterface $slugger, Recipe $recipe)
    {
        $form = $this->createForm(RecipeType::class, $recipe);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $em->flush();

            return $this->redirectToRoute('admin_recipe_index');
        }

        return $this->render('admin/recipe/edit.html.twig', [
            'form' => $form
        ]);
    }

    #[Route('/supprimer/{id}', name: 'delete', methods: ['DELETE'])]
    public function delete(Recipe $recipe, EntityManagerInterface $em)
    {
        $em->remove($recipe);
        $em->flush();

        return $this->redirectToRoute('admin_recipe_index');
    }
}

// TODO: add flash messages