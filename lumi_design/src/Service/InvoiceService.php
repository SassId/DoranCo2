<?php

namespace App\Service;

use App\Entity\Orders;
use Dompdf\Dompdf;
use Symfony\Component\DependencyInjection\ParameterBag\ParameterBagInterface;
use Symfony\Component\HttpFoundation\Response;
use Twig\Environment;

class InvoiceService
{
    private $twig;
    private $params;

    public function __construct(Environment $twig, ParameterBagInterface $params)
    {
        $this->twig = $twig;
        $this->params = $params;
    }

    public function generateInvoice(Orders $order)
    {
        // Render the HTML for the invoice using Twig
        $invoiceHtml = $this->twig->render('front/invoice/template.html.twig', [
            'order' => $order,
        ]);

        // Initialize Dompdf and load the HTML
        $dompdf = new Dompdf();
        $dompdf->loadHtml($invoiceHtml);

        // Render the PDF
        $dompdf->render();

        // Output the generated PDF
        return $dompdf->output();
    }

    public function saveInvoice($pdf, Orders $order)
    {
        $fileName = $order->getOrderNumber() . '.pdf';
        $fileDir = $this->params->get('kernel.project_dir') . '/public/invoices/';
        $filePath = $fileDir . $fileName;

        file_put_contents($filePath, $pdf);
    }
}
