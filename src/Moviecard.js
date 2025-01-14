import React from 'react';

const MovieCard = ({ movie }) => (
  <div>
    <h2>{movie.title}</h2>
    <img src={movie.posterURL} alt={`${movie.title} poster`} />
    <p>{movie.description}</p>
    <p>Rating: {movie.rating}</p>
  </div>
);

export default MovieCard;
