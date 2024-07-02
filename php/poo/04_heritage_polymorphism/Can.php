<?php


class Can extends Article
{
    /**
     * @var array
     */
    private array  $excipients;

    public function __construct(string $name, float $price, array $excipients)
    {
        parent::__construct($name, $price);
        $this->excipients = $excipients;

    }

    /**
     * Get the value of excipients
     *
     * @return  array
     */
    public function getExcipients()
    {
        return $this->excipients;
    }

    /**
     * Set the value of excipients
     *
     * @param  array  $excipients
     *
     * @return  self
     */
    public function setExcipients(array $excipients)
    {
        $this->excipients = $excipients;

        return $this;
    }

    public function displayExcipients(): string
    {
        return "The product $this->name contains : ". implode(', ', $this->excipients);
    }
}
