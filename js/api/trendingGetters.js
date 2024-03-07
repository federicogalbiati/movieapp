import { BASE_URL, OPTIONS } from "./config.js";



export const getTrending = async () => {
    const response = await fetch(BASE_URL + "trending/all/day?language=en-US" , OPTIONS);

    const data = await response.json();

    return data;
}

export const getTrendingMovies = async () => {
    const responseMovies = await fetch(BASE_URL + "trending/movie/day?language=en-US", OPTIONS);
    const dataMovies = await responseMovies.json();

    return dataMovies;
}

export const getTrendingTvSeries = async () => {
    const responseTvSeries = await fetch(BASE_URL + "trending/tv/day?language=en-US", OPTIONS);

    const dataTvSeries = await responseTvSeries.json();

    return dataTvSeries;
}
