<?php

require_once './Article.php';

class Aliment extends Article
{
    /**
     * @var string
     */
    private string $datePeremption;

    public function __construct(string $name, float $price, string $datePeremption)
    {
        parent::__construct($name, $price);
        $this->datePeremption = $datePeremption;
    }



    /**
     * Get the value of datePeremption
     *
     * @return  string
     */
    public function getDatePeremption(): string
    {
        return $this->datePeremption;
    }

    /**
     * Set the value of datePeremption
     *
     * @param  string  $datePeremption
     *
     * @return  self
     */
    public function setDatePeremption(string $datePeremption): self
    {
        $this->datePeremption = $datePeremption;

        return $this;
    }

    public function displayProduct(): string
    {
        return parent::displayProduct() . " La date de peremption est le $this->datePeremption";
    }
}
