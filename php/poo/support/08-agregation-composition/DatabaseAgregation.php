<?php

class DatabaseAgregation
{
    /**
     * @var PDO
     */
    private PDO $pdo;

    public function __construct(PDO $x){
        $this->pdo = $x;
    }

    /**
     * Get the value of pdo
     *
     * @return  PDO
     */ 
    public function getPdo()
    {
        return $this->pdo;
    }
}