<?php

// *the principle of a class composed of another object instanced inside it, is called Composition

class Database
{
    /**
     * @var PDO
     */
    private PDO $pdo;

    public function dbConnect(){
        $this->pdo =  new PDO(
            'mysql:host=localhost;dbname=library_db', // driver mysql, serveur de la BDD (host),nom de la BDD(dbname)
            'root', // Nom d'utilisateur
            '', // mot de passe
            [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION] // on affiche les erreurs
            ); 
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