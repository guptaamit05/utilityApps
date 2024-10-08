const search = document.querySelector('#search')
const mainDiv = document.querySelector('#main')
const form = document.querySelector('#form')


MOVIE_API        = 'https://freetestapi.com/api/v1/movies'
SEARCH_MOVIE_API = 'https://freetestapi.com/api/v1/movies?search='

getMovies(MOVIE_API)
async function getMovies(url){

    mainDiv.innerHTML = '';
    const moviesAll = await fetch(url)
    const data = await moviesAll.json()
    console.log(data)
    if(!data.length){
        mainDiv.innerHTML = ("<h1>No Record Found!</h1>")
    }
    data.forEach((movie)=>{
        showMovieData(movie)
    })
}

function showMovieData(movie){
    const mvediv = document.createElement('div');
    mvediv.classList.add('movie')
    mvediv.innerHTML = `
                <img src="${movie.poster}" alt="movie image">
                <div class="movie-info">
                    <h3>${movie.title}</h3>
                    <span class="${getClassByRate(movie.rating)}">${movie.rating}</span>
                </div>
                <div class="overview">
                    <h3>Overview</h3>
                    <p>${movie.plot}</p>
                </div>`
    mainDiv.appendChild(mvediv)
}


function getClassByRate(ratig){
    if(ratig > 8){
        return "green";
    }else if(ratig < 8 && ratig >4){
        return "orange"
    }else{
        return "red"
    }
}


form.addEventListener('submit', function(e){
    e.preventDefault();
    console.log(SEARCH_MOVIE_API+search.value)
    if(search.value && search.value !==""){
        getMovies(SEARCH_MOVIE_API+search.value)      
    }else{
        window.location.reload();
    }
})