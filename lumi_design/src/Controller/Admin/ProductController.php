<?php

namespace App\Controller\Admin;

use App\Entity\Product;
use App\Form\ProductType;
use App\Repository\ProductRepository;
use Doctrine\ORM\EntityManagerInterface;
use Faker\Core\Uuid;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/admin/product', name: 'admin_product_')]
class ProductController extends AbstractController
{
    private ProductRepository $repository;

    public function __construct(ProductRepository $repository)
    {
        $this->repository = $repository;
    }

    #[Route('/', name: 'index', methods: ['GET'])]
    public function index(Request $request): Response
    {
        $pagination = $this->repository->paginateProducts(
            $request->query->getInt('page', 1)
        );
        return $this->render('admin/product/index.html.twig', [
            'products' => $pagination
        ]);
    }

    #[Route('/ajouter', name: 'create', methods: ['GET', 'POST'])]
    public function create(EntityManagerInterface $em, Request $request): Response
    {
        $product = new Product();
        $form = $this->createForm(ProductType::class, $product);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            // $file = $form->get('thumbnail2')->getData();

            // if ($file) {
            //     $fileDir = $this->getParameter('kernel.project_dir') . '/public/img/thumbnails';
            //     $image = 'produit'. $product->getId() . '.' . $file->getClientOriginalExtension();
            //     $file->move($fileDir, $image);
            //     $product->setImage($image);
            // }

            $em->persist($product);
            $em->flush();
            $this->addFlash('success', 'Votre produit à bien été ajouté !');

            return $this->redirectToRoute('admin_product_index');
        }

        return $this->render('admin/product/create.html.twig', [
            'form' => $form
        ]);
    }
}
