<?php

class DatabaseAgregation
{
   /**
    * @var PDO
    */
   private PDO $pdo;

   public function __construct(PDO $pdo)
   {
    $this->pdo = $pdo;
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