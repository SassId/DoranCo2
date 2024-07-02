<?php

class SimulateurCredit
{
    /**
     * @var float
     */
    public const TAUX = 20.5;

    /**
     * @var float
     */
    private static float $quotient = 0.2;

    /**
     * @param int $pret
     *
     * @return float
     */
    public static function calculInteret(int $pret): float
    {
        return $pret * self::$quotient;
    }
}
