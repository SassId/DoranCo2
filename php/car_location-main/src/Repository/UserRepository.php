<?php

namespace app\Repository;

use App\Repository\AbstractRepository;

class UserRepository extends AbstractRepository
{
    public function getUserByEmail(string $email): array | bool
    {
        $stmt = $this->pdo->prepare("SELECT * FROM user WHERE email = :email");
        $stmt->bindParam(':email', $email, \PDO::PARAM_STR);
        $stmt->execute();
        return $stmt->fetch(\PDO::FETCH_ASSOC);
    }
}
