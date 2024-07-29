<?php

namespace App\Controller\Admin;

use App\Entity\Ingredient;
use App\Form\IngredientType;
use App\Repository\IngredientRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/admin/ingredient', name: 'admin_ingredient_')]
class IngredientController extends AbstractController
{

    #[Route('/', name: 'index', methods: ['GET'])]
    public function index(IngredientRepository $repository)
    {
        $ingredients = $repository->findAll();

        return $this->render('admin/ingredient/index.html.twig', [
            'ingredients' => $ingredients
        ]);
    }

    #[Route('/details/{slug}', name: 'show')]
    public function show(Ingredient $ingredient)
    {
        return $this->render('admin/ingredient/show.html.twig', [
            'ingredient' => $ingredient
        ]);
    }

    #[Route('/ajouter', name: 'create', methods: ['GET', 'POST'])]
    public function create(EntityManagerInterface $em, Request $request): Response
    {
        $ingredient = new Ingredient();
        $form = $this->createForm(IngredientType::class, $ingredient);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $file = $form->get('thumbnail')->getData();

            if ($file) {
                $fileDir = $this->getParameter('kernel.project_dir') . '/public/img/thumbnails';
                $fileName = $ingredient->getSlug() . '.' . $file->getClientOriginalExtension();
                $file->move($fileDir, $fileName);
            }

            $em->persist($ingredient);
            $em->flush();
            $this->addFlash('success', 'Votre ingrédient à bien été ajouté !');

            return $this->redirectToRoute('admin_ingredient_index');
        }

        return $this->render('admin/ingredient/create.html.twig', [
            'form' => $form
        ]);
    }

    #[Route('/update/{slug}', name: 'update', methods: ['GET', 'POST'])]
    public function update(EntityManagerInterface $em, Request $request, Ingredient $ingredient): Response
    {
        $form = $this->createForm(IngredientType::class, $ingredient);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $file = $form->get('thumbnail')->getData();

            if ($file) {
                $fileDir = $this->getParameter('kernel.project_dir') . '/public/img/thumbnails';
                $fileName = $ingredient->getSlug() . '.' . $file->getClientOriginalExtension();
                $file->move($fileDir, $fileName);
                $ingredient->setFileName($fileName);
            }
            $em->flush();
            $this->addFlash('success', 'Votre ingrédient à bien été modifié !');

            return $this->redirectToRoute('admin_ingredient_index');
        }

        return $this->render('admin/ingredient/update.html.twig', [
            'form' => $form
        ]);
    }

    #[Route('/supprimer/{id}', name: 'delete', methods: ['DELETE'])]
    public function delete(EntityManagerInterface $em, Ingredient $ingredient)
    {
        $em->remove($ingredient);
        $em->flush();
        $this->addFlash('success', "Votre ingrédient à bien été supprimé");

        return $this->redirectToRoute('admin_ingredient_index');
    }
}
