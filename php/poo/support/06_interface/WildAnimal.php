<?php

interface WildAnimal
{
    public function devore():string;

    public function eatBird(Bird $object):string;
}