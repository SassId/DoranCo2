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

    public function getAllUsers(): array
    {
        $stmt = $this->pdo->query("SELECT * FROM user");
        $stmt->execute();
        return $stmt->fetchAll(\PDO::FETCH_ASSOC);
    }

    public function getUserById(int $id)
    {
        $stmt = $this->pdo->prepare("SELECT * FROM user WHERE id = :id");
        $stmt->bindParam(':id', $id, \PDO::PARAM_INT);
        $stmt->execute();
        return $stmt->fetch(\PDO::FETCH_ASSOC);
    }
}
