import './App.css';
// import Menu from './components/MenuComponent.js';
import Movie from './components/Movie';
import React,{useEffect,useState} from 'react';
// http://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc?&api_key=40287c4c0632db7267b9149ba5df9928
// https://api.themoviedb.org/3/movie/157336?api_key={api_key}&append_to_response=videos,images
// https://api.themoviedb.org/3/movie/157336?api_key=40287c4c0632db7267b9149ba5df9928&append_to_response=videos,images
// https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher
//https://api.themoviedb.org/3/movie/343611?api_key={api_key}
const movielink ='http://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc%3F&api_key=40287c4c0632db7267b9149ba5df9928&page=1';




function App(){
  const [movies,setMovies]=useState([]);

  useEffect(()=>{
      fetch(movielink)
      .then((response)=>response.json())
        .then((data) => {
           console.log(data);
          setMovies(data.results);
        });
    },[]);


  return <div className="header">
    <h1 style={{ backgroundColor: "black",color:"white" }}>Assignment 3</h1>
        <div className="movie_container">
    {movies.length>0 && movies.map(movie => (
  <Movie key={movie.id} {...movie} />
  ))}
    </div></div>;
}


export default App;
