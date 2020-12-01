let movie1 = {name: "Gattaca",
            genre: "sci-fi",
            year: "1997"};

//Create
let state = {
    headerText: "Movies that must be seen",
    movies: [movie1],
    sortBy: "name",
};

//The Cruds
//add the cruds
//create
//Add movie
const addMovie = () => {
    console.log("add movie here");
    //user input
    
    //user  prompts for new movie
    let name = prompt("enter movie name");
    let genre = prompt("enter genre");
    let year = prompt("enter year");
    
    let newMovie = {name: name, genre: genre, year: year};
    state.movies.push(newMovie);
    render();
};

//update movie
const updateMovie = (index) => {
    console.log("update movie here");
    console.log(index);
    let name = prompt("enter movie name");
    let genre = prompt("enter genre");
    let year = prompt ("enter year");

    state.movie[index].name = name
    state.movie[index].genre = genre
    state.movie[index].year = year

    render ();

} 

//Delete movie
const deleteMovie = (index) => {
    console.log(index);
    console.log("delete called");
    const filteredMovie = state.movie.filter((thing, currentIndex) => {
        return currentIndex !==index;

    });
    state.movies =filteredMovie;
    render();
};

//render
const renderMovies = () => {
    // dostuff
    let htmlString = `<div class='list'>`;
    // loop over user add each user to htmlstring
    state.movies.forEach((movie, index) => {
      //do stuff
      htmlString += `<div class='movie'>
                      <div onclick='updateMovie(${index})'>${index}) ${movie.name} genre:${movie.genre} year:${movie.year}</div>
                      <button onclick='deleteMovie(${index})'>delete</button>
                     </div>`;
    });
    htmlString += `</div>`;
    return htmlString;
  };
    
// render function - this is responsible for taking state and rendering to the dom ie the web convert to html
const render = () => {
    console.log("render called");
    let root = document.getElementById("root");
    let htmlString = `<h1>${state.headerText}</h1><br/>`;
    htmlString += `<button id='add' onclick='addMovie()'>add Movie</button>`;
    htmlString += renderMovies();
    root.innerHTML = htmlString;
  };
  // document.getElementById('add').addEventListener('click',()=>{})
  // intial render
  render();
  console.log("script loaded");


