// TODO: Exercice:
// Créer un composant Player.
// Déclarer une constante “score” et lui donner une Valeur aléatoire.
// Avant de retourner le JSX dans le composant Player, Vérifier :
// Si le score est supérieur à 500, afficher ‘vainqueur’ en vert suivi du ‘score’.
// Sinon, afficher ‘Perdant’ en couleur rouge suivi du ‘score’.

export default function Player() {
  const score = 3800;
  const result = score > 500 ? "you win" : "you lose";
  const color = score > 500 ? "green" : "red";
  return <p style={{ color: color }}>your score is {score}: {result}</p>;
}
