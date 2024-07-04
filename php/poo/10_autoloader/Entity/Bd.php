<?php
namespace App\Entity;

final class Bd
{
    /**
     * @var string
     */
    private string $name;

    /**
     * @var string
     */
    private string $description;

    /**
     * @var string
     */
    private int $dateParution;

    /**
     * @var string
     */
    private string $auteur;

    public function __construct(string $name, string $description, int $dateParution, string $auteur)
    {
        $this->name = $name;
        $this->description = $description;
        $this->dateParution = $dateParution;
        $this->auteur = $auteur;
    }

    /**
     * Get the value of name
     *
     * @return  string
     */ 
    public function getName()
    {
        return $this->name;
    }

    /**
     * Set the value of name
     *
     * @param  string  $name
     *
     * @return  self
     */ 
    public function setName(string $name)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Get the value of description
     *
     * @return  string
     */ 
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * Set the value of description
     *
     * @param  string  $description
     *
     * @return  self
     */ 
    public function setDescription(string $description)
    {
        $this->description = $description;

        return $this;
    }

    /**
     * Get the value of dateParution
     *
     * @return  string
     */ 
    public function getDateParution()
    {
        return $this->dateParution;
    }

    /**
     * Set the value of dateParution
     *
     * @param  string  $dateParution
     *
     * @return  self
     */ 
    public function setDateParution(string $dateParution)
    {
        $this->dateParution = $dateParution;

        return $this;
    }

    /**
     * Get the value of auteur
     *
     * @return  string
     */ 
    public function getAuteur()
    {
        return $this->auteur;
    }

    /**
     * Set the value of auteur
     *
     * @param  string  $auteur
     *
     * @return  self
     */ 
    public function setAuteur(string $auteur)
    {
        $this->auteur = $auteur;

        return $this;
    }
}
