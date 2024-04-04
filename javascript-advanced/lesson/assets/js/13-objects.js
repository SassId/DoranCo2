/* --------------------------- OBJECTS --------------------------- */

// ? Les objets sont des structures de données complexes qui permettent de stocker des valeurs et des fonctions ensemble.

const person = {
    firstName: 'Rachid',
    lastName: 'EDJEKOUANE',
    age: 40,
    education: ['algorithmique', 'html', 'git', 'javascript'],
    occupation: {
        name: 'formateur',
        hour: 35,
    },
    getIdentification: function () {
        return `Je m'appelle ${this.firstName} ${this.lastName} `;
    },
};

// * Pour acceder à la propriété d'un objet on utilise la notation pointée `.`
console.log(person.firstName);
console.log(person.occupation.name);
console.log(person.getIdentification());

for (const course of person.education) {
    console.log(course);
}

// Pour modifier la valeur d'une propriété d'un objet
person.age = 41;

// Pour ajouter une nouvelle propriété à un objet
person.city = 'Paris';

// Pour supprimer une propriété d'un objet
delete person.city;

// Objet car
const car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2022,
    color: 'Blue',
    features: ['Air Conditioning', 'Power Windows', 'Bluetooth'],
    owner: {
        name: 'John Doe',
        age: 30,
    },
    start: function () {
        console.log('The car is starting.');
    },
    drive: function () {
        console.log('The car is in motion.');
    },
    honk: function () {
        console.log('Beep beep!');
    },
};

// Afficher les propriétés de l'objet car
console.log(`Owner: ${car.owner.name}`);
console.log(`Year: ${car.year}`);
console.log('Features:', car.features);

// Appeler les méthodes de l'objet car
car.start();
car.drive();
car.honk();

// Objet sangoku
const sangoku = {
    firstName: 'san',
    lastName: 'goku',
    children: ['gohan', 'goten'],
    age: 39,
    presentation: function () {
        return `Bonjour je m'appelle ${this.firstName} ${this.lastName} et jai ${this.children.length} enfants `;
    },
};

message = `${sangoku.presentation()} Ils s'appellent ${sangoku.children[0].toUpperCase()} et ${sangoku.children[1].toUpperCase()}`;
console.log(message);

// * Pour acceder à une propriété d'un objet on peut également utiliser les crochets `[]` et la clé en guise de valeur
console.log(car['model']);

// `for(...in..){}` permet de parcourir les propriétés d'un objet
for (let key in car) {
    console.log(car[key]);
}
