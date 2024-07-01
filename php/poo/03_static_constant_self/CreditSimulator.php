<?php

class CreditSimulator 
{
public const RATE = 20.5;

private static float $quotient = 0.1;

public static function calculateInterest($loan): float
{
    return $loan * self::$quotient;
}


}