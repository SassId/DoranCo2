<?php

interface SavageAnimal
{
    public function devore():string;

    public function eatBird(Bird $x):string;
}