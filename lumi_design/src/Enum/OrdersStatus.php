<?php

namespace App\Enum;

enum OrdersStatus: string
{
    case PENDING = 'en attente de validation';
    case PAYMENT_PENDING = 'en attente de paiement';
    case UNPAID = 'non payé';
    case PAID = 'payé';
    case PROCESSING = 'en préparation';
    case SHIPPED = 'envoyé';
    case CANCELED = 'annulé';
    case DELIVERED = 'livré';

}