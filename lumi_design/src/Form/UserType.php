<?php

namespace App\Form;

use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class UserType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('email', TextType::class, [
                'label' => 'E-mail'
            ])
            // ->add('roles', ChoiceType::class, [
            //     'label' => 'Rôle',
            //     'choices' => [
            //         'Utilisateur' => 'ROLE_USER',
            //         'Administrateur' => 'ROLE_ADMIN',
            //     ],
            //     'multiple' => true, // Set to true if you want the ability to select multiple roles
            //     'expanded' => false, // Set to true for checkboxes, false for a select box
            // ])
            ->add('password', PasswordType::class, [
                'label' => "Mot de Passe", 
                'mapped' => false,
                // 'empty_data' => ''
            ])
            ->add('lastName', TextType::class, [
                'label' => "Nom"
            ])
            ->add('firstName', TextType::class, [
                'label' => "Prénom"
            ])
            ->add('address', TextType::class, [
                'label' => "Adresse"
            ])
            ->add('zipCode', TextType::class, [
                'label' => "Code Postal"
            ])
            ->add('city', TextType::class, [
                'label' => "Ville"
            ])
            ->add('phoneNumber', TextType::class, [
                'label' => "Téléphone"
            ])
            // ->add('createdAt', null, [
            //     'widget' => 'single_text',
            // ])
            ->add('isActive', CheckboxType::class)
            ->add('isVerified', CheckboxType::class, [
                'disabled' => true
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}
