<?php

namespace App\Variation;


use App\Entity\Pirate;

final class Captain extends Pirate
{
    /**
     * @var string
     */
    public string $crewName;


    /**
     * Get the value of crewName
     *
     * @return  string
     */
    public function getCrewName()
    {
        return $this->crewName;
    }

    /**
     * Set the value of crewName
     *
     * @param  string  $crewName
     *
     * @return  self
     */
    public function setCrewName(string $crewName)
    {
        $this->crewName = $crewName;

        return $this;
    }
}
