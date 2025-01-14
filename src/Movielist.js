import React from 'react';


const MovieList = ({ movies }) => (
  <div>
    {movies.map((movie, index) => (
      <MovieCard key={index} movie={movie} />
    ))}
  </div>
);

export default MovieList;
