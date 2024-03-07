import { getTrending, getTrendingMovies, getTrendingTvSeries } from "./api/trendingGetters.js";

const data = getTrending();
const dataMovies = getTrendingMovies();
const dataTvSeries = getTrendingTvSeries();
