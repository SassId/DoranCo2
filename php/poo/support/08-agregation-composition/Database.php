<?php

class Database
{
    private PDO $pdo;

    public function dbConnect()
    {
        $this->pdo = new PDO('mysql:host=localhost;dbname=library_db', 'root', '', [PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION]);
    }

    /**
     * Get the value of pdo
     */
    public function getPdo()
    {
        return $this->pdo;
    }
}
