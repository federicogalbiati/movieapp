/**
 * la funzione prenderà in ingresso un array di movies, per ogni movie aggiungerà al dom un nuovo nodo, che sara' un tag <li> contenente il titolo del movie
 * 
 * 
 * @param Array dei film
 * @returns
 */

export const createMovieCards = async (movie) => {
    const cardsContainer = document.getElementById("cards-container");

    movie.results.forEach(Element => {
        const card = document.createElement("div");
        card.classList.add("card");

        const img = document.createElement("img");
        img.src = "https://image.tmdb.org/t/p/w500" + Element.poster_path;
        img.alt = movie.title;

        const title = document.createElement("h2");
        title.textContent = Element.title;

        const releaseDate = document.createElement("p");
        releaseDate.textContent = "Data di uscita:" + Element.release_date;

        const vote = document.createElement("p");
        vote.textContent = "Voto:" + Element.vote_average;

        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(releaseDate);
        card.appendChild(vote);

        cardsContainer.appendChild(card);
    });
}


/*
       Da aggiungere:
     * id
     * poster_path
     * title
     * vote_avarage
     * media_type
     * release_date
*/
