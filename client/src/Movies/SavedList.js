import React from 'react';
import {Link , BrowserRouter, Switch, Route} from 'react-router-dom'
import MovieList from './MovieList'

export default function SavedList(props) {
  console.log('props',props)
  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <span className="saved-movie">{movie.title}</span>
      ))}
      <Link to='/' className="home-button">Home</Link>
      
    </div>
  );
}
{/* <Route path ='/' render= {(props) => 
          <MovieList movies = {props.movieList} />} /> */}