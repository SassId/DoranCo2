<?php

namespace App\Form;

use App\Entity\Recipe;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Event\PreSubmitEvent;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\RangeType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\FormEvents;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\String\Slugger\AsciiSlugger;

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
                'label' => 'Temps de Préparation (en minutes)'
            ])
            ->add('numberOfPlates', IntegerType::class, [
                'label' => 'Nombre de Couverts'
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
                'label' => 'Etapes à Suivre'
            ])
            ->add('price', IntegerType::class, [
                'label' => 'Prix (en euros)'
            ])
            ->add('isFavorite', ChoiceType::class, [
                'label' => 'Favoris',
                'choices' => [
                    'Yes' => true,
                    'No' => false,
                ],
                'expanded' => true,
                'multiple' => false,
                'required' => true,
            ])
            ->addEventListener(FormEvents::PRE_SUBMIT, $this->autoSlug(...));
    }
    public function autoSlug(PreSubmitEvent $event)
    {
        dd($event);
        $data = $event->getData();
        dd($data);
        if (empty($data['slug'])) {
            $slugger = new AsciiSlugger();
            $slug = strtolower($slugger->slug($data['name']));
            $data['slug'] = $slug;
        }
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Recipe::class,
        ]);
    }
}
