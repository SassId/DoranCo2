<?php

namespace App\Controller\Admin;

use App\Entity\Candy;
use App\Repository\CandyRepository;
use DateTimeImmutable;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Routing\Requirement\Requirement;

#[Route('/admin/article', 'admin_article_')]
class ArticleController extends AbstractController
{
    public function __construct(private EntityManagerInterface $em, private CandyRepository $candyRepository)
    {
        $this->em = $em;
        $this->candyRepository = $candyRepository;
    }

    #[Route('/', name: 'index')]
    public function index(): Response
    {
        return $this->render('admin/article/index.html.twig');
    }

    #[Route('/create', name: 'create')]
    public function create(EntityManagerInterface $em): Response
    {
        $candy = new Candy();
        $candy->setName('Lollipop')
            ->setSlug('lollipop')
            ->setDescription('yummy!')
            ->setCreatedAt(new DateTimeImmutable());
        // dd($candy);
        // dd($em);

        $em->persist($candy); //allows doctrine to acknowledge the object
        $em->flush(); // Flush the entity to save it to the database

        return $this->render('admin/article/create.html.twig');
    }

    #[Route('/update/{id}', name: 'update', requirements: ['id' => Requirement::DIGITS])]
    public function update($id, CandyRepository $repository, EntityManagerInterface $em): Response // example of DI (Dependency Injection made possible without instancing the object)
    {
        // * Many ways to collect entries from the database:

        // ? find() (takes the id as parameter and collects the right entry)
        // $candy = $repository->find($id);

        // ? findAll() (collects all entries)
        // $candy = $repository->findAll();

        // ? findBy() (collects entries meeting conditions defined in the parameters)
        // $candy = $repository->findBy();

        // ? findOneBy (collects the one entry meeting conditions defined in the parameters)
        // $candy = $repository->findOneBy([
        //     'slug' => 'lollipop',
        //     'name' => 'lollipop'
        // ]);

        // $candy = $repository->find($id);
        $candy = $this->candyRepository->find($id);
        // ! dd($candy); now this returned an object filled with info from the db, this is called Hydration
        $candy->setName('Sugar Cane')
            ->setUpdatedAt(new DateTimeImmutable());

        $em->flush();

        return $this->render('admin/article/update.html.twig');
    }

    #[Route('/delete/{id}', name: 'delete', requirements: ['id' => Requirement::DIGITS])]
    public function delete($id, CandyRepository $repository, Candy $candy): Response
    {
        // $candy = $repository->find($id); // since we passed the $candy in the parameter, this line become obsolete
        $this->em->remove($candy);
        $this->em->flush();

        return $this->render('admin/article/delete.html.twig');
    }
}
