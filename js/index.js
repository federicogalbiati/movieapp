import { getPerson, getTrending, getTrendingMovies, getTrendingTvSeries } from "./api/trendingGetters.js";
import dotenv from 'dotenv';

dotenv.config();

const data = getTrending().then((data) => {
    console.log(data)
    // 1) estrarre l'array dei risultati
    const arrResult = data.results;

    // ciclare l'array dei risultati
    arrResult.forEach(element => {
    // per ogni elemento stampare in console.log 
     /**Da aggiungere:
     * id
     * poster_path
     * title
     * vete_avarage
     * media_type
     * release_date
     */
        
    });


 
});
const dataMovies = getTrendingMovies().then((dataMovies) => {
    console.log(dataMovies)
});
const dataTvSeries = getTrendingTvSeries().then((dataTvSeries) => {
    console.log(dataTvSeries)
});
const dataPerson = getPerson("Therock").then((dataPerson) => {
    console.log(dataPerson)
});



/**
 * estrarre i dati 
 * ciclare l'array
 * stampare 
 */

/*const id = data.find(function (id){
    return id;
});
console.log(id);
*/


/*
const dataMovies = getTrendingMovies();
const dataTvSeries = getTrendingTvSeries();
const dataPerson = getPerson();

const data = getTrending()
.then((data) => {
    console.log(data)
});
*/