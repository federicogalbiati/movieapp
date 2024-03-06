const options = {
    headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNmQzMGJjMmQ0NzBlYjQxOTdhMTQxNGRhYTMzMGJhNSIsInN1YiI6IjY1ZTg2YjdhYzE1Zjg5MDE4NjE3NjBjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gI_TwY6xNM7ohSlp6hPSA9qXy-UH4_iezaeZDWjkis0"
    },
};

export const getTrending = async (baseUrl) => {
    const response = await fetch(baseUrl + "all/day?language=en-US" , options);

    const data = await response.json();

    return data;
}

export const getTrendingMovies = async (baseUrl) => {
    const responseMovies = await fetch(baseUrl + "movie/day?language=en-US", options);

    const dataMovies = await responseMovies.json();

    return dataMovies;
}