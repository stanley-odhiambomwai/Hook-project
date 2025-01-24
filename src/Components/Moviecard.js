import React from 'react';
import { Link } from 'react-router-dom';;

const MovieCard = ({ movie }) => {
  return(
  <div>
     <Link to={`/movie/${movie.title}`}>
    <h2>{movie.title}</h2>
    <img src={movie.posterURL} alt={`${movie.title} poster`} />
    <p>{movie.description}</p>
    <p>Rating: {movie.rating}</p>
    </Link>
  </div>
  );
};

export default MovieCard;
