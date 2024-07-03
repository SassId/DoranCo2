<?php

abstract class Vehicule
{
    /**
     * @var int
     */
    protected int $nbTest = 100;

  final public function demarrer():string
    {
        return "je suis démarré";
    }

    abstract public function carburant();

    public function nbTest():int
    {
      return $this->nbTest;
    }


}