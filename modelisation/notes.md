# <u>Modelisation</u>

Il s'agit d'apprendre les codes de schématisation d'un besoin client pour le cahier des charges.

1. Merise
   C'est une méthode utilisée surtout en Europe pour conceptualiser et modéliser la solution numérique en partant du cahier des charges jusqu'au déploiement.  
   Il s'agit d'une approche structurelle et divise le processus de conception en différentes phases.
   <br>
2. UML (unified modeling language)
   C'est un langage surtout utilisé au USA pour modéliser la solution numérique.

## Merise = methode

A partir du DD (dictionnaire de données) qui est la liste de toutes les types de données dont on va avoir besoin pour notre créer notre solution numérique, nous allons ensuite définir le MCD (modèle conceptuel de données)
Conception **orientée relationel** avec **séparation des données et des traitements**.


### Merise II (v2)

<u>Identification relative:</u>
Elle intervient lorsque l'id d'une entité ne suffit pas à l'identifier de manière précise.

_ex: un immeuble est identifié par son numéro de rue mais il faut également le nom où l'id de la rue pour le retrouver etc._

<u>Heritage:</u>
Il intervient lorsque plusieurs entités possèdent des propriétés similaires.
On "tire" la nouvelle entité de la précédente et elle aura les mêmes attributs plus d'autres.

- par disjonction:
  l'entité parent est soit l'un, soit l'autre des enfants
  <br>

- par couverture:
  l'entité parent est forcément aussi l'un des enfant

#### Passage du MCD au MLD

Dans le MLD (modèle logique de données), les entités deviennent des relations.
Nous nous basons alors sur les cardinalités pour écrires les relations en appliquant certaines règles.

##### <span style="color: red">Résumé:</span>

**MCD: Entités - Relations - Cardinalités**

## UML =  langage
On l'utilise pour la conception **orientée objet**.
