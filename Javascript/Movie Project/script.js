let movies = []
let currentPage = 1;
const renderMovies = (movies)=>{
    const moviesList = document.getElementById("movies-list");
    moviesList.innerHTML = '';
    movies.map((movie)=>{
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
                    <i class="fa-regular fa-heart fa-2xl" id="favorite-icon"></i>
                </section>
        `
        moviesList.appendChild(listItem);

    })
}
async function fetchMovies(page){
    try {
        const response =await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=f531333d637d0c44abc85b3e74db2186&language=en-US&page=${page}`);
        const result = await response.json();
        movies = result.results;
        console.log(movies)
        renderMovies(movies);
        
    } catch (error) {
        console.log(error)
    }
}
fetchMovies(currentPage)
//sorting section
let firstSortByRating =true;
let firstSortByRatingButton = document.getElementById("sort-by-rating");
firstSortByRatingButton.addEventListener('click', sortByRating)
function sortByRating(){
    let sortedMovies;
    if(firstSortByRating){
      sortedMovies = movies.sort((a,b)=>a.vote_average - b.vote_average);
      firstSortByRatingButton.innerText = "Sort by rating(most to least)";
      firstSortByRating = false ;
    } else if(!firstSortByRating){
        sortedMovies = movies.sort((a,b)=>b.vote_average - a.vote_average);
      firstSortByRatingButton.innerText = "Sort by rating(least to most)";
      firstSortByRating = true;
    }
    renderMovies(sortedMovies)
}
let firstSortByDate =true;
let firstSortByDateButton = document.getElementById("sort-by-date");
firstSortByDateButton.addEventListener('click', sortByDate)
function sortByDate(){
    let sortedMovies;
    if(firstSortByDate){
      sortedMovies = movies.sort((a,b)=>new Date(a.release_date) - new Date(b.release_date));
      firstSortByDateButton.innerText = "Sort by date (latest to oldest)";
      firstSortByDate = false ;
    } else if(!firstSortByDate){
        sortedMovies = movies.sort((a,b)=>new Date(b.release_date) - new Date(a.release_date));
      firstSortByDateButton.innerText = "Sort by date (oldest to latest)";
      firstSortByDate = true;
    }
    renderMovies(sortedMovies)
}
//sorting section ends
// pagination section
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
function getMovieNameFromLocalStorage(){
    const favouriteMovies = JSON.parse(localStorage.getItem("favoriteMovies"))
    return favouriteMovies === null ? [] :favouriteMovies;
}

function addMovieNameToLocalStorage(movieName){
   const favoriteMovies = getMovieNameFromLocalStorage();
  localStorage.setItem("favoriteMovies",
  JSON.stringify([...favoriteMovies,movieName])) 
}

function removeMovieNameFromLocalStorage(movieName){
    const favoriteMovies = getMovieNameFromLocalStorage();
   localStorage.setItem("favoriteMovies",
   JSON.stringify(favoriteMovies.filter((name)=> name !== movieName)))
}

//search Section
const searchMovies =async (searchMovie)=>{
   try {
    const response =await fetch(`https://api.themoviedb.org/3/search/movie?query=${searchMovie}&include_adult=false&language=en-US&page=1&api_key=f531333d637d0c44abc85b3e74db2186`);
    const result = await response.json();
    movies =result.results;
    renderMovies(movies);
   }
   catch(error){
    console.log(error)
   }
}
const searchButton = document.getElementById("search-button");
const searchInput = document.getElementById("search-input");
const pagination = document.getElementById("pagination")
searchButton.addEventListener("click",()=>{
    searchMovies(searchInput.value);
    pagination.style.display="none";
})

const getMovieByName = async (movieName)=>{
    try {
        const response =await fetch(`https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1&api_key=f531333d637d0c44abc85b3e74db2186`);
        const result = await response.json();
        return result.results[0];
        
       }
       catch(error){
        console.log(error)
       }
}


const showFavorites = (favMoviesName)=>{
    const {poster_path,title,vote_count,vote_average} = favMoviesName;
    const moviesList = document.getElementById("movies-list");
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
                <i class="fa-solid fa-xmark fa-xl xmark" id="favorite-icon"></i>
            </section>
    `
    const removelistfromFavorite = listItem.querySelector(".xmark")
    removelistfromFavorite.addEventListener("click",(event)=>{
         const {id} = event.target;
         removeMovieNameFromLocalStorage(id);
         fetchWishlistMovie();
    });
    moviesList.appendChild(listItem);
    
}

const fetchWishlistMovie = async ()=>{
    const movieList = getMovieNameFromLocalStorage();
    for (let i =0;i< movieList.length;i++){
        const movieName = movieList[i];
        const movieData = await getMovieByName(movieName);
        console.log(movieData)
        showFavorites(movieData);
    }
}

const allTab= document.getElementById("all-tab");
const favoriteTab = document.getElementById("favorites-tab");
console.log(favoriteTab)

function displayMovies(){
    if(allTab.classList.contains("active-tab")){
        renderMovies(movies);

    }else if(favoriteTab.classList.contains("active-tab")){
        fetchWishlistMovie();
        pagination.style.display="none";
    }
}
function switchTab(event){
    allTab.classList.remove("active-tab");
    favoriteTab.classList.remove("active-tab");
    event.target.classList.add("active-tab");
    displayMovies();
}

allTab.addEventListener("click",switchTab)
favoriteTab.addEventListener("click",switchTab)