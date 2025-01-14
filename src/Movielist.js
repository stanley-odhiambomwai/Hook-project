import React from 'react';
import MovieCard from './Moviecard.js';

const MovieList = ({ movies }) => (
  <div>
    {movies.map((movie, index) => (
      <MovieCard key={index} movie={movie} />
    ))}
  </div>
);

export default MovieList;
