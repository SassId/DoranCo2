<!-- //  Creer une class Aliment qui herite de article
// datePeremption

// constructeur getter setter 

// methode displayProduct qui affiche :
// "Le produit est : XXX et il coûte XXX euros" et la date de Peremption est le XXX -->

<?php

class FreshFood extends Article
{
    /**
     * @var string
     */
    private string $expirationDate;

    public function __construct($name, $price, $expirationDate)
    {
        parent::__construct($name, $price);
        $this->expirationDate = $expirationDate;
    }



    /**
     * Get the value of expirationDate
     *
     * @return  string
     */
    public function getExpirationDate()
    {
        return $this->expirationDate;
    }

    /**
     * Set the value of expirationDate
     *
     * @param  string  $expirationDate
     *
     * @return  self
     */
    public function setExpirationDate(string $expirationDate)
    {
        $this->expirationDate = $expirationDate;

        return $this;
    }

    public function displayProduct(): string
    {
        return parent::displayProduct() . " (remember to use before : $this->expirationDate )";
    }
}
