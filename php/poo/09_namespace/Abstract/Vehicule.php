<?php

namespace App\Abstract;

use App\Entity\User;

abstract class Vehicule
{
  /**
   * @var int
   */
  protected int $nbTest = 100;

  final public function demarrer(): string
  {
    return "je suis démarré";
  }

  abstract public function carburant(): string;

  public function nbTest(): int
  {
    return $this->nbTest;
  }

  public function accident(User $user, bool $isWounded): string
  {
    $user->setIsWounded($isWounded);

    if ($user->getIsWounded()) {

      return "{$user->getPseudo()} est blessé";
    }
    return "{$user->getPseudo()} n'est pas blessé";
  }
}
