/**
 * la funzione prenderà in ingresso un array di movies, per ogni movie aggiungerà al dom un nuovo nodo, che sara' un tag <li> contenente il titolo del movie
 * 
 * 
 * @param Array dei film
 * @returns
 */

export const createMovieCards = async (movie, containerId) => {
    const cardsContainer = document.getElementById(containerId);
    
    movie.results.forEach(Element => {
        const card = document.createElement("div");
        card.classList.add("card");

        const img = document.createElement("img");
        img.src = "https://image.tmdb.org/t/p/w500" + Element.poster_path;
        img.alt = movie.title;

        const releaseDate = document.createElement("p");
        releaseDate.textContent = "Data di uscita: " + Element.release_date;

        const vote = document.createElement("p");
        vote.textContent = "Voto: " + Element.vote_average;

        card.appendChild(img);
        card.appendChild(releaseDate);
        card.appendChild(vote);

        cardsContainer.appendChild(card);
    });
};

const scrollbarWidthTrendings = document.getElementById('container-trendings').offsetWidth - document.getElementById('container-trendings').clientWidth;
document.getElementById('scrollbar-1').style.width = scrollbarWidthTrendings + 'px';

const scrollbarWidthMovies = document.getElementById('container-movies').offsetWidth - document.getElementById('container-movies').clientWidth;
document.getElementById('scrollbar-2').style.width = scrollbarWidthMovies + 'px';

const scrollbarWidthTvSeries = document.getElementById('container-tvseries').offsetWidth - document.getElementById('container-tvseries').clientWidth;
document.getElementById('scrollbar-3').style.width = scrollbarWidthTvSeries + 'px';
/*
const scrollbarWidthPerson = document.getElementById('container-person').offsetWidth - document.getElementById('container-person').clientWidth;
document.getElementById('scrollbar-4').style.width = scrollbarWidthPerson + 'px';
*/
/*
       Da aggiungere:
     * id
     * poster_path
     * title
     * vote_avarage
     * media_type
     * release_date
*/

/* const title = document.createElement("h2");
        title.textContent = Element.title;
*/
//card.appendChild(title);