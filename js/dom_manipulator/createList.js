// Define createMovieCards function
function createMovieCards(movie, containerId) {
  const cardsContainer = document.getElementById(containerId);
  cardsContainer.innerHTML = ''; // Clear previous content
  
  if (!movie.results || movie.results.length === 0) {
    const message = document.createElement("p");
    message.textContent = "No results found";
    message.style.color = "white";
    message.style.textAlign = "center";
    cardsContainer.appendChild(message);
    return;
  }
  
  movie.results.forEach(Element => {
    const card = document.createElement("div");
    card.classList.add("card");

    const img = document.createElement("img");
    if (Element.poster_path) {
      img.src = "https://image.tmdb.org/t/p/w500" + Element.poster_path;
    } else {
      img.src = "https://via.placeholder.com/500x750?text=No+Image";
    }
    img.alt = Element.title || Element.name || "Movie";

    const title = document.createElement("h2");
    title.textContent = Element.title || Element.name || "Unknown";
    title.style.textAlign = "center";
    
    const releaseDate = document.createElement("p");
    releaseDate.textContent = "Data di uscita: " + (Element.release_date || Element.first_air_date || "N/A");
    releaseDate.style.textAlign = "center";

    const vote = document.createElement("p");
    vote.textContent = "Voto: " + (Element.vote_average || "N/A");
    vote.style.textAlign = "center";

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(releaseDate);
    card.appendChild(vote);

    cardsContainer.appendChild(card);
  });
}

// Define createPersonCards function
const createPersonCards = async (personData, containerId) => {
  const cardsContainer = document.getElementById(containerId);
  cardsContainer.innerHTML = ''; // Clear previous results
  
  personData.results.forEach(person => {
      const card = document.createElement("div");
      card.classList.add("card");

      const img = document.createElement("img");
      if (person.profile_path) {
          img.src = "https://image.tmdb.org/t/p/w500" + person.profile_path;
      } else {
          img.src = "https://via.placeholder.com/500x750?text=No+Image";
      }
      img.alt = person.name;

      const name = document.createElement("h2");
      name.textContent = person.name;

      const knownFor = document.createElement("p");
      knownFor.textContent = "Known for: " + person.known_for_department;

      const popularity = document.createElement("p");
      popularity.textContent = "Popularity: " + person.popularity.toFixed(1);

      card.appendChild(img);
      card.appendChild(name);
      card.appendChild(knownFor);
      card.appendChild(popularity);

      cardsContainer.appendChild(card);
  });

  // Update scrollbar width
  const scrollbarWidth = document.getElementById(containerId).offsetWidth - document.getElementById(containerId).clientWidth;
  document.getElementById('scrollbar-4').style.width = scrollbarWidth + 'px';
};

// Code for scrollbars - execute when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  try {
    setTimeout(() => {
      const scrollbarWidthTrendings = document.getElementById('container-trendings').offsetWidth - document.getElementById('container-trendings').clientWidth;
      document.getElementById('scrollbar-1').style.width = scrollbarWidthTrendings + 'px';

      const scrollbarWidthMovies = document.getElementById('container-movies').offsetWidth - document.getElementById('container-movies').clientWidth;
      document.getElementById('scrollbar-2').style.width = scrollbarWidthMovies + 'px';

      const scrollbarWidthTvSeries = document.getElementById('container-tvseries').offsetWidth - document.getElementById('container-tvseries').clientWidth;
      document.getElementById('scrollbar-3').style.width = scrollbarWidthTvSeries + 'px';
    }, 1000); // Delay to ensure content is loaded
  } catch(e) {
    console.log("Error setting scrollbar widths:", e);
  }
});

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