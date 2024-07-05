<?php

namespace App\ClassManager;

use App\Abstract\Character;


class CharacterManager
{
    /**
     * @var array
     */
    private array $CharactersList = [];

    public function addCharacter(Character $character)
    {
        $this->CharactersList[] = $character;
    }

    public function listCharacters()
    {
        foreach ($this->CharactersList as $character) {
            echo $character;
        }
    }

    /**
     * Get the value of CharactersList
     *
     * @return  array
     */
    public function getCharactersList(): array
    {
        return $this->CharactersList;
    }

    /**
     * Set the value of CharactersList
     *
     * @param  array  $CharactersList
     *
     * @return  self
     */
    public function setCharactersList(array $CharactersList): self
    {
        $this->CharactersList = $CharactersList;

        return $this;
    }
}
