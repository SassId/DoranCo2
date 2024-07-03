<?php

// * An Interface is a contract which defines methods that will need to be implemented by the class implementing it

interface Healing
{
    public function revive(): void;

    public function feed(int $food): int;
}
