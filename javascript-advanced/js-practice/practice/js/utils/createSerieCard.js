export function createSerieCard(obj) {
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