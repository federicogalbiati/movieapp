import { getPerson, getTrending, getTrendingMovies, getTrendingTvSeries } from "./api/trendingGetters.js";
import dotenv from 'dotenv';

dotenv.config();


const data = getTrending().then((data) => {
        //console.log(data)
    // 1) estrarre l'array dei risultati
    const arrResult = data.results;
    // 2) ciclare l'array dei risultati
    arrResult.forEach(element => {
    // per ogni elemento stampare in console.log 
     /**Da aggiungere:
     * id
     * poster_path
     * title
     * vote_avarage
     * media_type
     * release_date
     */
     console.log(`${element.id}, ${element.title}, ${element.poster_path}, ${element.vote_average}, ${element.media_type}, ${element.release_date}`);
    });
});

const dataMovies = getTrendingMovies().then((dataMovies) => {
        //console.log(dataMovies)
    // 1) estrarre l'array dei risultati
    const arrResultMovies = dataMovies.results;
    // 2) ciclare l'array dei risultati
    arrResultMovies.forEach(movie => {
    // per ogni elemento stampare in console.log 
     /**Da aggiungere:
     * id
     * poster_path
     * title
     * vote_avarage
     * media_type
     * release_date
     */
     console.log(`${movie.id}, ${movie.title}, ${movie.poster_path}, ${movie.vote_average}, ${movie.media_type}, ${movie.release_date}`);
    });
});
const dataTvSeries = getTrendingTvSeries().then((dataTvSeries) => {
        //console.log(dataTvSeries)
    // 1) estrarre l'array dei risultati
    const tvSeries = dataTvSeries.results;
    // 2) ciclare l'array dei risultati
    tvSeries.forEach(tvShow => {
    // per ogni elemento stampare in console.log 
     /**Da aggiungere:
     * id
     * poster_path
     * title
     * vote_avarage
     * media_type
     * release_date
     */
    console.log(`${tvShow.id}, ${tvShow.name}, ${tvShow.poster_path}, ${tvShow.vote_average}, ${tvShow.media_type}, ${tvShow.release_date}`);
    });
});
const dataPerson = getPerson("Person").then((dataPerson) => {
        //console.log(dataPerson)
    // 1) estrarre l'array dei risultati
    const person =dataPerson.results;
    // 2) ciclare l'array dei risultati
    person.forEach(person => {
    // per ogni elemento stampare in console.log 
     /**Da aggiungere:
     * id
     * poster_path
     * title
     * vote_avarage
     * media_type
     * release_date
     */
    console.log(`${person.id}, ${person.name}, ${person.poster_path}, ${person.vote_avarage}, ${person.media_type}, ${person.birth_data}`);
    });
});

