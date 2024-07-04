<?php

// Une interface est un contrat qui définit les méthodes que les classes qui l'implémentent doivent implémenter.

interface Guerison
{
    public function reanime(): void;

    public function nourrir(int $nourriture): int;
}
