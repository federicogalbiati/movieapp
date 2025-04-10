function createPersonCards(personData, containerId) {
    const cardsContainer = document.getElementById(containerId);
    cardsContainer.innerHTML = ''; // Clear previous results
    
    if (!personData.results || personData.results.length === 0) {
        const message = document.createElement("p");
        message.textContent = "No results found";
        message.style.color = "white";
        message.style.textAlign = "center";
        cardsContainer.appendChild(message);
        return;
    }
    
    // Create a section title for the person
    const sectionTitle = document.createElement("div");
    sectionTitle.style.width = "100%";
    sectionTitle.style.textAlign = "center";
    sectionTitle.style.marginBottom = "20px";
    
    const personInfo = personData.results[0];
    
    // Main person card
    const personCard = document.createElement("div");
    personCard.classList.add("card");
    personCard.style.margin = "10px auto";
    personCard.style.width = "300px";

    const img = document.createElement("img");
    if (personInfo.profile_path) {
        img.src = "https://image.tmdb.org/t/p/w500" + personInfo.profile_path;
    } else {
        img.src = "https://via.placeholder.com/500x750?text=No+Image";
    }
    img.alt = personInfo.name;

    const name = document.createElement("h2");
    name.textContent = personInfo.name;
    name.style.textAlign = "center";

    const knownFor = document.createElement("p");
    knownFor.textContent = "Known for: " + personInfo.known_for_department;
    knownFor.style.textAlign = "center";

    const popularity = document.createElement("p");
    popularity.textContent = "Popularity: " + personInfo.popularity.toFixed(1);
    popularity.style.textAlign = "center";

    personCard.appendChild(img);
    personCard.appendChild(name);
    personCard.appendChild(knownFor);
    personCard.appendChild(popularity);

    sectionTitle.appendChild(personCard);
    cardsContainer.appendChild(sectionTitle);
    
    // Display person's movies if available
    if (personData.movies && personData.movies.length > 0) {
        const moviesTitle = document.createElement("h3");
        moviesTitle.textContent = personInfo.name + "'s Movies";
        moviesTitle.style.color = "white";
        moviesTitle.style.width = "100%";
        moviesTitle.style.textAlign = "center";
        moviesTitle.style.margin = "20px 0";
        cardsContainer.appendChild(moviesTitle);
        
        // Show top 10 movies sorted by popularity
        const topMovies = personData.movies
            .sort((a, b) => b.popularity - a.popularity)
            .slice(0, 10);
            
        topMovies.forEach(movie => {
            const card = document.createElement("div");
            card.classList.add("card");

            const movieImg = document.createElement("img");
            if (movie.poster_path) {
                movieImg.src = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
            } else {
                movieImg.src = "https://via.placeholder.com/500x750?text=No+Image";
            }
            movieImg.alt = movie.title;

            const title = document.createElement("h2");
            title.textContent = movie.title;
            title.style.textAlign = "center";

            const releaseDate = document.createElement("p");
            releaseDate.textContent = "Data di uscita: " + (movie.release_date || "N/A");
            releaseDate.style.textAlign = "center";

            const character = document.createElement("p");
            character.textContent = "Character: " + (movie.character || "N/A");
            character.style.textAlign = "center";

            card.appendChild(movieImg);
            card.appendChild(title);
            card.appendChild(releaseDate);
            card.appendChild(character);

            cardsContainer.appendChild(card);
        });
    }

    // Update scrollbar width
    try {
        const scrollbarWidth = document.getElementById(containerId).offsetWidth - document.getElementById(containerId).clientWidth;
        document.getElementById('scrollbar-4').style.width = scrollbarWidth + 'px';
    } catch(e) {
        console.log("Error setting scrollbar width:", e);
    }
} 