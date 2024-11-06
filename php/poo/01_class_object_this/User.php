<?php

//  A class is a model to create an object (instance of the class)
//  A class is like a construction plan for objects
//  A class in comprised of properties and methods
//  A class is a model of data

class User
{
    // a property is a variable defined inside a class

    /**
     * @var string
     */
    public string $firstname;

    /**
     * @var string
     */
    public string $lastname;

    /**
     * @var string
     */
    public string $email;

    /**
     * @var string
     */
    public string $password;

    /**
     * @var int
     */
    public int $age;

    /**
     * @var array
     */
    public array $grades;

    // a method is a function defined inside a class

    /**
     * greeting message
     * @return string
     */
    public function greet(): string
    {
        return "Hello, my name is $this->firstname $this->lastname 👋";
    }

    // Create a function presentation 
    // "Hello, i'm (name)  and i'm (age) years old

    /**
     * complete greeting message
     * @param int $age
     * @return string
     */
    function presentation(int $age): string
    {
        return  "{$this->greet()} and i'm $age years old 👋";
    }
}