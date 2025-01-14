import React, { useState } from 'react';
import MovieList from './components/MovieList';


const App = () => {
  const [movies, setMovies] = useState([
    { title: 'Inception', description: 'A mind-bending thriller.', posterURL: 'https://via.placeholder.com/150', rating: 5 },
    { title: 'The Dark Knight', description: 'A gripping superhero tale.', posterURL: 'https://via.placeholder.com/150', rating: 4 },
  ]);

  const [filter, setFilter] = useState({ title: '', rating: 0 });

  const addMovie = (newMovie) => setMovies([...movies, newMovie]);

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filter.title.toLowerCase()) &&
      movie.rating >= filter.rating
  );

  return (
    <div>
      <h1>Movie App</h1>
      <Filter setFilter={setFilter} />
      <MovieList movies={filteredMovies} />
      <button onClick={() => addMovie({ title: 'New Movie', description: 'New description', posterURL: 'https://via.placeholder.com/150', rating: 3 })}>
        Add Movie
      </button>
    </div>
  );
};

export default App;
