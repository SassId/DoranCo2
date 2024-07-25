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
use Symfony\Component\Security\Http\Attribute\IsGranted;
use Symfony\Component\String\Slugger\SluggerInterface;

#[Route('admin/recette', name: 'admin_recipe_')]
// #[IsGranted()]
// #[IsGranted('IS_AUTHENTICATED')]
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

    #[Route('/details/{slug}', name: 'show', methods: ['GET'])]
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
                $fileDir = $this->getParameter('kernel.project_dir') . '/public/img/thumbnails';
                $fileName = $recipe->getSlug() . '.' . $file->getClientOriginalExtension();
                $file->move($fileDir, $fileName);
                $recipe->setFileName($fileName);
            }

            $em->persist($recipe);
            $em->flush();
            $this->addFlash('success', 'votre recette a bien été ajoutée');

            return $this->redirectToRoute('admin_recipe_index');
        }

        return $this->render('admin/recipe/create.html.twig', [
            'form' => $form
        ]);
    }

    #[Route('/editer/{slug}', name: 'edit')]
    public function edit(EntityManagerInterface $em, Request $request, Recipe $recipe)
    {
        $form = $this->createForm(RecipeType::class, $recipe);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $file = $form->get('thumbnailFile')->getData();

            if ($file) {
                $fileDir = $this->getParameter('kernel.project_dir') . '/public/img/thumbnails';
                $fileName = $recipe->getSlug() . '.' . $file->getClientOriginalExtension();
                $file->move($fileDir, $fileName);
                $recipe->setFileName($fileName);
            }

            $em->flush();
            $this->addFlash('success', 'votre recette a bien été modifiée');


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
        $this->addFlash('success', 'votre recette a bien été suprrimée');


        return $this->redirectToRoute('admin_recipe_index');
    }
}

// TODO: change route paths to french (inside controller and index page with button links ;)
// TODO: add unique to fixtures on ingredients