import { BASE_URL, OPTIONS } from "./config.js";



export const getTrending = async () => {
    const response = await fetch(BASE_URL + "trending/all/day?language=en-US" , OPTIONS);
    const data = await response.json();

    return data;
};

export const data = getTrending().then((data) => {
    // 1) estrarre l'array dei risultati
    const arrResult = data.results;

    return arrResult;
});


export const getTrendingMovies = async () => {
    const responseMovies = await fetch(BASE_URL + "trending/movie/day?language=en-US", OPTIONS);
    const dataMovies = await responseMovies.json();

    return dataMovies;
};

export const dataMovies = getTrendingMovies().then((dataMovies) => {
    // 1) estrarre l'array dei risultati
    const arrResultMovies = dataMovies.results;

    return arrResultMovies;
});


export const getTrendingTvSeries = async () => {
    const responseTvSeries = await fetch(BASE_URL + "trending/tv/day?language=en-US", OPTIONS);

    const dataTvSeries = await responseTvSeries.json();

    return dataTvSeries;
};

export const dataTvSeries = getTrendingTvSeries().then((dataTvSeries) => {
    // 1) estrarre l'array dei risultati
    const tvSeries = dataTvSeries.results;

    return tvSeries;
});


export const getPerson = async (searchTerm) => {
    // Use a fixed search term "Tom Cruise" instead of the parameter
    const fixedSearchTerm = "Tom Cruise";
    const responsePerson = await fetch(BASE_URL + `search/person?query=${encodeURIComponent(fixedSearchTerm)}&language=en-US`, OPTIONS);
    const dataPerson = await responsePerson.json();
    return dataPerson;
};

export const dataPerson = getPerson("person").then((dataPerson) => {
    // 1) estrarre l'array dei risultati
    const arrPerson = dataPerson.results;

    return arrPerson;
});





