<?php

namespace App\Entity;

final class User
{
    /**
     * @var string
     */
    protected string $pseudo;

    /**
     * @var bool
     */
    protected bool $isWounded;

    /**
     * Get the value of pseudo
     *
     * @return  string
     */ 
    public function getPseudo(): string
    {
        return $this->pseudo;
    }

    /**
     * Set the value of pseudo
     *
     * @param  string  $pseudo
     *
     * @return  self
     */ 
    public function setPseudo(string $pseudo): self
    {
        $this->pseudo = $pseudo;

        return $this;
    }

    /**
     * Get the value of isWounded
     *
     * @return  bool
     */ 
    public function getIsWounded()
    {
        return $this->isWounded;
    }

    /**
     * Set the value of isWounded
     *
     * @param  bool  $isWounded
     *
     * @return  self
     */ 
    public function setIsWounded(bool $isWounded)
    {
        $this->isWounded = $isWounded;

        return $this;
    }
}