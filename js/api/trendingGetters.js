import { BASE_URL, OPTIONS } from "./config.js";



export const getTrending = async () => {
    const response = await fetch(BASE_URL + "trending/all/day?language=en-US" , OPTIONS);
    const data = await response.json();

    return data;
}

export const data = getTrending().then((data) => {
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


export const getTrendingMovies = async () => {
    const responseMovies = await fetch(BASE_URL + "trending/movie/day?language=en-US", OPTIONS);
    const dataMovies = await responseMovies.json();

    return dataMovies;
}

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


export const getTrendingTvSeries = async () => {
    const responseTvSeries = await fetch(BASE_URL + "trending/tv/day?language=en-US", OPTIONS);

    const dataTvSeries = await responseTvSeries.json();

    return dataTvSeries;
}

const personToSearch = "Therock";

export const getPerson = async () => {
    const responsePerson = await fetch(BASE_URL + `search?${personToSearch}`, OPTIONS);

    const dataPerson= await responsePerson.json();

    return dataPerson;
}

