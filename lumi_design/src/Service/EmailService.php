<?php

namespace App\Service;

use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Address;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use App\Entity\Orders;
use App\Enum\OrdersStatus;

class EmailService
{
    private $mailer;

    public function __construct(MailerInterface $mailer)
    {
        $this->mailer = $mailer;
    }

    public function sendOrderConfirmationEmail(Orders $order): void
    {
        $user = $order->getCustomer();
        $email = (new TemplatedEmail())
            ->from(new Address('lumidesign@support.com', 'LumiDesign'))
            ->to($user->getEmail())
            ->subject('Votre commande est ' . OrdersStatus::PROCESSING->value)
            ->htmlTemplate('emails/order_confirmation.html.twig')
            ->locale('fr')
            ->context([
                'order' => $order,
            ]);

        $this->mailer->send($email);
    }
}
