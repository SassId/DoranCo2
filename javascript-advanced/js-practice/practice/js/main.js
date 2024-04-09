// TODO EXERCICE :

// ? Manipulation de chaines de caractères trouvez sur google les fonctions vous permettant d'obtenir le resultat demandé
// * https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String

// Créer une variable avec le texte suivant: "Je suis une chaine de caractères "
const text = "Je suis une chaîne de caractères ";

const message = new String("Je suis une chaîne de caractère"); //! creates a new objetc that is a string

// Afficher la longueur de la chaine de caractères en console
console.log(text.length);

// Afficher le premier caractère de la chaine de caractères en console
// ? 2 methods
console.log(text.charAt(0));
console.log(text.at(0));

// Afficher le dernier caractère de la chaine de caractères en console
console.log(text.charAt(text.length - 1));
console.log(text.at(-1));

// Supprimer les espaces en début et fin de chaine de caractères et l'afficher en console
console.log(text.trim());

// Afficher les 10 premiers caractères de la chaine de caractères en console
// ? Substring Method:
console.log(text.substring(0, 10));

// ? Sclice Method: indice not included
console.log(text.slice(0, 10));

// Mettre la chaine de caractères en majuscules et l'afficher en console
console.log(text.toUpperCase());

// Mettre la chaine de caractères en minuscules et l'afficher en console
console.log(text.toLowerCase());

// Remplacer "chaine de caractère" par "string" dans la phrase et l'afficher en console
// ? Part-text method:
console.log(text.replace("chaîne de caractères", "string"));
// Afficher la chaine de caractères en console en remplaçant chaque espace par un underscore
console.log(text.replace(/ /g, "_"));
console.log(text.replaceAll(" ", "_"));

// Transformer la chaine de caractères en tableau contenant chaque mots et l'afficher en console
// ? Split Method:
console.log(text.split(" "));

// ? Array.from method:
console.log(Array.from(text));

const pokemons = [
  "Bulbasaur",
  "Charmander",
  "Squirtle",
  "Pikachu",
  "Jigglypuff",
  "Meowth",
  "Psyduck",
  "Snorlax",
  "Magikarp",
  "Eevee",
];

// Afficher en console le dernier élément du tableau pokemons
console.log(pokemons[pokemons.length - 1]);

// Transformer le tableau pokemons en chaine de caractères avec les noms des pokemons séparés par une virgule et un espace et l'afficher en console
// ? The toString() method is not configurable with parameters
console.log(pokemons.toString());

// ? The .join() method is configurable:
console.log(pokemons.join(", "));

// Inverser l'ordre du tableau:
console.log(pokemons.reverse());

// Créer un fonction qui prend en paramètres une chaîne de caractères
// Vérifier si c'est un palindrom
// Si oui, return true
// Sinon, return false

function isPalindrome(string) {
  let newString = string.split("").reverse().join("");

  if (newString == string) {
    return true;
  } else {
    // at this point, we can also write is without "else"
    return false;
  }
}
const testPalindrome = isPalindrome("radar");
console.log(testPalindrome);

// TODO EXERCICE

const newSeries = [
  {
    title: "The Crown",
    genre: "Drame historique",
    synopsis:
      "Cette série dramatique suit les rivalités politiques et les intrigues personnelles de la reine Elizabeth II, du roi George VI, et de Winston Churchill.",
    seasons: 4,
    imdbRating: 8.7,
  },
  {
    title: "The Mandalorian",
    genre: "Science-Fiction",
    synopsis:
      "Un chasseur de primes solitaire explore les confins de la galaxie, loin de l'autorité de la Nouvelle République.",
    seasons: 2,
    imdbRating: 8.7,
  },
  {
    title: "The Witcher",
    genre: "Fantasy",
    synopsis:
      "Geralt de Riv, un chasseur de monstres solitaire, lutte pour trouver sa place dans un monde où les gens se révèlent souvent plus méchants que les bêtes.",
    seasons: 2,
    imdbRating: 8.2,
  },
  {
    title: "The Boys",
    genre: "Super-héros / Comédie noire",
    synopsis:
      "Une équipe de justiciers lutte contre des super-héros corrompus qui abusent de leur pouvoir plutôt que de le protéger.",
    seasons: 2,
    imdbRating: 8.7,
  },
  {
    title: "The Umbrella Academy",
    genre: "Super-héros / Science-Fiction",
    synopsis:
      "Une famille de super-héros dysfonctionnels se réunit pour résoudre le mystère de la mort de leur père et éviter une apocalypse imminente.",
    seasons: 2,
    imdbRating: 8.0,
  },
];

//* Afficher en console le titre de chaque série dans le tableau newSeries

for (let element of newSeries) {
  console.log(element.title);
}

//? Or
newSeries.forEach((element) => {
  const { title } = element;
  console.log(element.title);
});

// Afficher en console le titre des series avec une note IMDb supérieure à 8.5
newSeries.forEach((element) => {
  if (element.imdbRating > 8.5) {
    console.log(element.title);
  }
});

// Afficher en console le titre des séries qui ont moins de 3 saisons et une note IMDb supérieure à 8.5
newSeries.forEach((element) => {
  // Destructurer l'objet pour extraire seaons et imdbRating et la renommer "note"
  const { seasons, imdbRating: note, title } = element;

  if (seasons < 3 && note > 8.5) {
    console.log(title);
  }
});

// Afficher en console le titre et les 60 premiers caractères du synopsis
newSeries.forEach((element) => {
  console.log(element.title, element.synopsis.substring(0, 60));
});

// Créer une fonction createSerieCard() qui prend un objet série en paramètre et retourne une card HTML avec les informations de la série
// La card sera une div avec une classe 'card' et contiendra les informations de la série
// La carte doit contenir un titre h3, un paragraphe pour le genre, un paragraphe pour le synopsis, un paragraphe pour le nombre de saisons et un paragraphe pour la note IMDb
function createSerieCard(obj) {
  // Destructurer l'objet dans la fontion pour créer des variables 'genre', 'synopsis'
  const {title: seriesTitle, genre: seriesGenre, synopsis: seriesSynopsis, seasons: seriesSeasons, imdbRating: seriesRating} = obj
  const card = document.createElement("div");
  card.classList = "card"; // card.classList.add('card')
  const title = document.createElement("h3");
  title.textContent = seriesTitle;
  const genre = document.createElement("p");
  genre.textContent = seriesGenre;
  const synopsis = document.createElement("p");
  synopsis.textContent = seriesSynopsis;
  const seasons = document.createElement("p");
  seasons.textContent = `Number of Seasons: ${seriesSeasons}`;
  const rating = document.createElement("p");
  rating.textContent = seriesRating;

  card.append(title, genre, synopsis, seasons, rating);
  return card;
}

// Pour chaque série dans le tableau newSeries, créer une carte et l'ajouter à la section #new-series
newSeries.forEach((serie) => {
  const card = createSerieCard(serie);
  const newSeriesDiv = document.getElementById("new-series");
  newSeriesDiv.append(card);
});

// TODO EXERCICE

const popularSeries = [
  {
    title: "Game of Thrones",
    genre: "Fantasy / Drama",
    synopsis:
      "Une lutte impitoyable pour le pouvoir se déroule dans les Sept Royaumes de Westeros, tandis que des forces sinistres se lèvent au-delà du Mur pour menacer tout le royaume.",
    seasons: 8,
    imdbRating: 9.3,
  },
  {
    title: "Breaking Bad",
    genre: "Drama / Thriller",
    synopsis:
      "Un professeur de chimie atteint de cancer se lance dans la fabrication de méthamphétamine pour assurer l'avenir financier de sa famille, entraînant une descente dans le monde dangereux du crime.",
    seasons: 5,
    imdbRating: 9.5,
  },
  {
    title: "Stranger Things",
    genre: "Science-Fiction / Horror",
    synopsis:
      "À Hawkins, en Indiana, dans les années 1980, un jeune garçon disparaît mystérieusement. Pendant ce temps, une jeune fille aux pouvoirs télékinésiques s'échappe d'un laboratoire sinistre et découvre un monde étrange et effrayant.",
    seasons: 4,
    imdbRating: 8.7,
  },
  {
    title: "The Big Bang Theory",
    genre: "Comedy",
    synopsis:
      "Une sitcom qui suit les aventures de quatre scientifiques et de leurs voisins alors qu'ils naviguent dans la vie et l'amitié.",
    seasons: 12,
    imdbRating: 8.1,
  },
  {
    title: "Stranger Things",
    genre: "Science-Fiction / Horror",
    synopsis:
      "À Hawkins, en Indiana, dans les années 1980, un jeune garçon disparaît mystérieusement. Pendant ce temps, une jeune fille aux pouvoirs télékinésiques s'échappe d'un laboratoire sinistre et découvre un monde étrange et effrayant.",
    seasons: 4,
    imdbRating: 8.7,
  },
];

// Créer un élément ul avec la class 'popular-list'
// Ajouter un élément li pour le titre de chaque série dans le tableau popularSeries
// Ajouter la liste à la section #popular

const popSeries = document.createElement("ul");
popSeries.classList = "popular-list";
newSeries.forEach((element) => {
  const listItem = document.createElement("li");
  listItem.textContent = element.title;
  popSeries.append(listItem);
  const popSeriesDiv = document.getElementById("popular");
  popSeriesDiv.append(popSeries);
});

// TODO EXERCICE

const mustWatchSeries = [
  {
    title: "Les Soprano",
    genre: "Drame / Crime",
    synopsis:
      "Un patron de la mafia du New Jersey jongle avec les défis de sa vie professionnelle et les complexités de sa vie familiale.",
    seasons: 6,
    imdbRating: 9.2,
  },
  {
    title: "The Wire",
    genre: "Drame / Crime",
    synopsis:
      "Cette série explore la vie dans les quartiers pauvres de Baltimore à travers les yeux de la police et des trafiquants de drogue.",
    seasons: 5,
    imdbRating: 9.3,
  },
  {
    title: "Breaking Bad",
    genre: "Drame / Thriller",
    synopsis:
      "Un professeur de chimie atteint de cancer se lance dans la fabrication de méthamphétamine pour assurer l'avenir financier de sa famille, entraînant une descente dans le monde dangereux du crime.",
    seasons: 5,
    imdbRating: 9.5,
  },
  {
    title: "Friends",
    genre: "Comédie",
    synopsis:
      "Un groupe d'amis inséparables navigue à travers les hauts et les bas de la vie à New York, partageant des rires, des larmes et des moments inoubliables.",
    seasons: 10,
    imdbRating: 8.9,
  },
  {
    title: "The Office (US)",
    genre: "Comédie",
    synopsis:
      "Une équipe dysfonctionnelle travaille dans un bureau de vente de papier, où les blagues, les drames de bureau et les moments hilarants se produisent quotidiennement.",
    seasons: 9,
    imdbRating: 8.9,
  },
];

// Créer un élément select avec la class 'select-series'
// Avec un element option avec le titre de chaque série dans le tableau mustWatchSeries
// Ajouter le select à la section #must-watch

const mustWatchSelect = document.createElement("select");
mustWatchSelect.classList = "select-series";

mustWatchSeries.forEach((element) => {
  const mustWatchOption = document.createElement("option");
  mustWatchOption.textContent = element.title;
  mustWatchOption.value = element.title;
  mustWatchSelect.append(mustWatchOption);
});

const mustWatchDiv = document.getElementById("must-watch");
mustWatchDiv.append(mustWatchSelect);

// TODO EXERCICE
// Ajouter un écouteur d'événements 'change' sur le select
// Lorsque l'utilisateur sélectionne une série, afficher une card avec la fonction déjà créée pour cette série dans la section #must-watch
// Si une carte est déjà affichée, la remplacer par la nouvelle série sélectionnée

mustWatchSelect.id = "must-watch-select";
const mustWatchSelection = document.getElementById("must-watch-select");

mustWatchSelection.addEventListener("change", (e) => {
  const specificCard = document.getElementById("specific-card");
  console.log(specificCard);
  if (specificCard) {
    specificCard.remove();
  }
  mustWatchSeries.forEach((element) => {
    if (e.target.value == element.title) {
      const card = createSerieCard(element);
      card.id = "specific-card";
      mustWatchDiv.append(card);
    }
  });
});
