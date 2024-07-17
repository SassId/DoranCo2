<?php

namespace App\Controller\Admin;

use App\Entity\Category;
use App\Repository\CategoryRepository;
use DateTimeImmutable;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Routing\Requirement\Requirement;

#[Route('/admin/category', 'admin_category_')]
class CategoryController extends AbstractController
{
    #[Route('/', name: 'index')]
    public function index(): Response
    {
        return $this->render('admin/category/index.html.twig');
    }

    #[Route('/create', name: 'create')]
    public function create(EntityManagerInterface $em): Response
    {
        $category = new Category;
        $category->setName('Bubble Gum')
            ->setSlug('bubble-gum')
            ->setDescription('chew on this and smile')
            ->setCreatedAt(new DateTimeImmutable())
            ->setUpdatedAt(new DateTimeImmutable());

        $em->persist($category);
        $em->flush();

        return $this->render('admin/category/create.html.twig');
    }

    #[Route('/update/{id}', name: 'update', requirements: ['id' => Requirement::DIGITS])]
    public function update($id, CategoryRepository $repository, EntityManagerInterface $em ): Response
    {
    $category = $repository->find($id);
    $category->setDescription('Chew on this baby !');
    $em->flush();

        return $this->render('admin/category/update.html.twig');
    }

    #[Route('/delete/{id}', name: 'delete', requirements: ['id' => Requirement::DIGITS])]
    public function delete($id, CategoryRepository $repository, EntityManagerInterface $em ): Response
    {
    $category = $repository->find($id);
    $em->remove($category);
    $em->flush();

        return $this->render('admin/category/delete.html.twig');
    }
}
