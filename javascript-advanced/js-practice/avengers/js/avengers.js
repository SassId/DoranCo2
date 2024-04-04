const listMovies = document.querySelector('#list-movies');

listMovies.addEventListener('click', function (event) {
    if (
        event.target.style.fontSize == '' ||
        event.target.style.fontSize == '16px'
    ) {
        event.target.style.fontSize = '30px';
    } else {
        event.target.style.fontSize = '16px';
    }
});

listMovies.addEventListener('dblclick', function (e) {
    const movieTitle = document.querySelector('#movie-title');
    if (movieTitle) {
        movieTitle.remove();
    }

    const title = document.createElement('h2');
    title.textContent = e.target.textContent;
    title.setAttribute('id', 'movie-title');

    const container = document.querySelector('#container');

    container.prepend(title);
});
