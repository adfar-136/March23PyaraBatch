// https://learn.newtonschool.co/n/vca0ptbqtaql/preview

let movies = [];
let currentPage = 1;
let totalPages = 0;
const moviesList = document.getElementById("movies-list");

function getMovieNamesFromLocalStorage() {
  const favouriteMovies = JSON.parse(localStorage.getItem("favouriteMovies"));
  return favouriteMovies === null ? [] : favouriteMovies;
}

function addMovieNameToLocalStorage(movieName) {
  const favMoviesNames = getMovieNamesFromLocalStorage();
  localStorage.setItem(
    "favouriteMovies",
    JSON.stringify([...favMoviesNames, movieName])
  );
}

function removeMovieNameFromLocalStorage(movieName) {
  const favMoviesNames = getMovieNamesFromLocalStorage();
  localStorage.setItem(
    "favouriteMovies",
    JSON.stringify(favMoviesNames.filter((movName) => movName !== movieName))
  );
}


const renderMovies = (movies)=>{
    moviesList.innerHTML = '';
    movies.map((movie)=>{
       const favmovielist = getMovieNamesFromLocalStorage()
        const {poster_path,title,vote_count,vote_average} = movie;
        let listItem = document.createElement("li");
        listItem.className = "card";
        listItem.innerHTML = `
        <img
                    class="poster"
                    src=https://image.tmdb.org/t/p/original/${poster_path}
                    alt="movie-title"
                />
                <p class="title">${title}</p>
                <section class="vote-favouriteIcon">
                    <section class="vote">
                    <p class="vote-count">${vote_count}</p>
                    <p class="vote-average">${vote_average}</p>
                    </section>
                    <i class="fav-icon fa-regular fa-heart fa-2xl ${favmovielist.includes(title) ? "fa-solid" : null}" 
                    data-adfar="${title}" ></i>
                </section>`;
                moviesList.appendChild(listItem);
                const faviconbtn = listItem.querySelector(".fav-icon");
                faviconbtn.addEventListener("click",(event)=>{
                      let id = event.target.dataset.adfar;
                      console.log(id);
                      if(faviconbtn.classList.contains("fa-solid")){
                        removeMovieNameFromLocalStorage(id)
                        faviconbtn.classList.remove("fa-solid")
                      } else{
                        addMovieNameToLocalStorage(id);
                        faviconbtn.classList.add("fa-solid");
                      }

                })

    })
}

async function fetchMovies(page) {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=f531333d637d0c44abc85b3e74db2186&language=en-US&page=${page}`);
        const result = await response.json();
        movies = result.results;
        renderMovies(movies);
    } catch (error) {
        console.log(error);
    }
}

fetchMovies(currentPage);

let firstSortByDateClick = true;
const sortByDateButton = document.getElementById("sort-by-date");
function sortByDate() {
    let sortedMovies;
    if (firstSortByDateClick) {
        sortedMovies = movies.sort(
            (a, b) => new Date(a.release_date) - new Date(b.release_date)
        );
        sortByDateButton.textContent = "Sort by date (latest to oldest)";
        firstSortByDateClick = false;
    } else if (!firstSortByDateClick) {
        sortedMovies = movies.sort(
            (a, b) => new Date(b.release_date) - new Date(a.release_date)
        );
        sortByDateButton.textContent = "Sort by date (oldest to latest)";
        firstSortByDateClick = true;
    }
    renderMovies(sortedMovies);
}

sortByDateButton.addEventListener("click", sortByDate);

let firstSortByRatingClick = true;
const sortByRatingButton = document.getElementById("sort-by-rating");
function sortByRating() {
    let sortedMovies; 
    if (firstSortByRatingClick) {
        sortedMovies = movies.sort((a, b) => a.vote_average - b.vote_average);
        sortByRatingButton.textContent = "Sort by rating (most to least)";
        firstSortByRatingClick = false;
    } else if (!firstSortByRatingClick) {
        sortedMovies = movies.sort((a, b) => b.vote_average - a.vote_average);
        sortByRatingButton.textContent = "Sort by rating (least to most)";
        firstSortByRatingClick = true;
    }
    renderMovies(sortedMovies);
}

sortByRatingButton.addEventListener("click", sortByRating);

let prevButton = document.getElementById("prev-button");
let pageNumberButton = document.getElementById("page-number-button");
let nextButton = document.getElementById("next-button");
prevButton.disabled = true;

prevButton.addEventListener("click",()=>{
    currentPage--;
    fetchMovies(currentPage);
    pageNumberButton.innerText = `current Page: ${currentPage}`;
    if(currentPage === 1){
        prevButton.disabled=true;
        nextButton.disabled=false;
    } else {
        prevButton.disabled=false;
        nextButton.disabled=false;
    }
})
nextButton.addEventListener("click",()=>{
    currentPage++;
    fetchMovies(currentPage);
    pageNumberButton.innerText = `current Page: ${currentPage}`;
    if(currentPage === 3){
        prevButton.disabled=false;
        nextButton.disabled=true;
    } else {
        prevButton.disabled=false;
        nextButton.disabled=false;
    }
})

const searchMovies = async (searchedMovie) => {
  try{
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${searchedMovie}&api_key=f531333d637d0c44abc85b3e74db2186&include_adult=false&language=en-US&page=1`
    );
    const result = await response.json();
    movies = result.results;
    renderMovies(movies);
    searchedMovie = true;
  } catch (error) {
    console.log(error);
  }
};

const searchButton = document.getElementById("search-button");
const searchInput = document.getElementById("search-input");
searchButton.addEventListener("click", () => {
  searchMovies(searchInput.value);
  pagination.style.display = "none";
});

const getMovieByName = async (movieName) => {
  try { 
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movieName}&api_key=f531333d637d0c44abc85b3e74db2186&include_adult=false&language=en-US&page=1`
    );
    const result = await response.json();
    return result.results[0];
  } catch (error) {
    console.log(error);
  }
};
const showFavourites = (favMoviesName) => {
  const { poster_path, title, vote_count, vote_average } = favMoviesName;
  let listItem = document.createElement("li");
  listItem.className = "card";
  let imgSrc = poster_path
    ? `https://image.tmdb.org/t/p/original/${poster_path}`
    : "https://w7.pngwing.com/pngs/116/765/png-transparent-clapperboard-computer-icons-film-movie-poster-angle-text-logo-thumbnail.png";
  listItem.innerHTML += `
    <img
      class="poster"
      src=${imgSrc}
      alt="${title}"
    />
    <p class="title">${title}</p>
    <section class="vote-favouriteIcon">
      <section class="vote">
        <p class="vote-count">Votes: ${vote_count}</p>
        <p class="vote-average">Rating: ${vote_average}</p>
      </section>
      <i class="favorite-icon fa-solid fa-xmark fa-xl xmark" id="${title}"></i>
    </section>`;
  
  const removeFromWishlistBtn = listItem.querySelector(".xmark");
  removeFromWishlistBtn.addEventListener("click", (event) => {
    const { id } = event.target;
    removeMovieNameFromLocalStorage(id);
    fetchWishlistMovie();
  });
  moviesList.appendChild(listItem);
};

const fetchWishlistMovie = async () => {
  moviesList.innerHTML = " ";
  const movieNamesList = getMovieNamesFromLocalStorage();
  for (let i = 0; i < movieNamesList.length; i++) {
    const movieName = movieNamesList[i];
    let movieDataFromName = await getMovieByName(movieName);
    showFavourites(movieDataFromName);
  }
};

const allTab = document.getElementById("all-tab");
const favoritesTab = document.getElementById("favorites-tab");
function displayMovies() {
  if (allTab.classList.contains("active-tab")) {
    renderMovies(movies);
   
  } else if (favoritesTab.classList.contains("active-tab")) {
    fetchWishlistMovie();
    pagination.style.display = "none";
  }
}

function switchTab(event) {
  allTab.classList.remove("active-tab");
  favoritesTab.classList.remove("active-tab");

  event.target.classList.add("active-tab");

  displayMovies();
}

allTab.addEventListener("click", switchTab);
favoritesTab.addEventListener("click", switchTab);

const onsearchChange = async (event)=>{
  let {value} =event.target;
  if(!value){
    renderMovies(movies)
  } else{
    await searchMovies(value);
  }

}
searchInput.addEventListener("input",()=>{
  onsearchChange(event)
})