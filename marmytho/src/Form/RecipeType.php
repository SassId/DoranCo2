<?php

namespace App\Form;

use App\Entity\Ingredient;
use App\Entity\Recipe;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Event\PreSubmitEvent;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\RangeType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\FormEvents;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\String\Slugger\AsciiSlugger;
use Symfony\Component\Validator\Constraints\File;

class RecipeType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('name', TextType::class, [
                'label' => 'Nom'
            ])
            ->add('slug', TextType::class, [
                'required' => false
            ])
            ->add('duration', IntegerType::class, [
                'label' => 'Temps de Préparation (en minutes)',
                'required' => false
            ])
            ->add('numberOfPlates', IntegerType::class, [
                'label' => 'Nombre de Couverts',
                'required' => false
            ])
            ->add('difficulty', RangeType::class, [
                'label' => 'Niveau de Difficulté',
                'required' => false,
                'attr' => [
                    'min' => 1,
                    'max' => 5,
                    'step' => 1,
                ],
            ])
            ->add('description', TextareaType::class, [
                'label' => 'Etapes à Suivre',
                'required' => false
            ])
            ->add('price', IntegerType::class, [
                'label' => 'Prix (en euros)',
                'required' => false
            ])
            ->add('isFavorite', CheckboxType::class, [
                'label' => 'Favori',
                'required' => false

            ])
            ->add('ingredients', EntityType::class, [
                'class' => Ingredient::class,
                'choice_label' => 'name',
                'multiple' => true,
                // 'expanded' => true,
                'required' => false
            ])
            ->add('thumbnailFile', FileType::class, [
                'label' => 'Ajouter une image',
                'mapped' => false,
                'required' => false,
                'constraints' => [
                    new File([
                        'maxSize' => '1024k',
                        'mimeTypes' => [
                            'image/jpeg',
                            'image/png',
                        ],
                        'mimeTypesMessage' => 'formats acceptés: jpg, jpeg, png',
                    ])
                ]
            ])
            ->addEventListener(FormEvents::PRE_SUBMIT, $this->autoSlug(...));
    }

    public function autoSlug(PreSubmitEvent $event)
    {
        $data = $event->getData();
        if (empty($data['slug'])) {
            $slugger = new AsciiSlugger();
            $slug = $slugger->slug($data['name'])->lower();
            $data['slug'] = $slug;
        }

        $event->setData($data);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Recipe::class,
        ]);
    }
}
