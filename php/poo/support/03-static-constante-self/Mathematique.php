<?php

class Mathematique
{
    /**
     * @param float $x
     * @param float $y
     *
     * @return float
     */
    public static function addition(float $x, float $y): float
    {
        return $x + $y;
    }

    /**
     * @param float $x
     * @param float $y
     *
     * @return float
     */
    public static function soustraction(float $x, float $y): float
    {
        return $x - $y;
    }

    /**
     * @param float $x
     * @param float $y
     *
     * @return float
     */
    public static function multiplication(float $x, float $y): float
    {
        return $x * $y;
    }

    /**
     * @param float $x
     * @param float $y
     *
     * @return float
     */
    public static function division(float $x, float $y): float | string
    {
        if (self::isNotNull($y)) {

            return $x / $y;
        }

        return 'vous ne pouvez pas diviser par 0';
    }

    /**
     * @param float $x
     *
     * @return bool
     */
    private static function isNotNull(float $x): bool
    {
        return $x != 0;
    }
}
