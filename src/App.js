// App.js
import React, { useState } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import "./App.css"

const App = () => {
  const [movies, setMovies] = useState([
    { title: 'Inception', description: 'A mind-bending thriller', posterURL: 'https://m.media-amazon.com/images/M/MV5BMjExMjkwNTQ0Nl5BMl5BanBnXkFtZTcwNTY0OTk1Mw@@._V1_.jpg', rating: 8.8 },
    { title: 'Titanic', description: 'A love story on a doomed ship', posterURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6fqLJq-uQXz522EIndBH0jrYUK1ksnykkOg&s', rating: 7.8 },
    { title: 'The Dark Knight', description: 'Batman battles the Joker', posterURL: 'https://m.media-amazon.com/images/M/MV5BYmU3NWU1NmQtZDJhMi00NmM3LWI2NDItMjk5NWUzZjZkYmFjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg', rating: 9.0 },
  ]);

  const [filter, setFilter] = useState({ title: '', rating: '' });

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filter.title.toLowerCase()) &&
      (filter.rating ? movie.rating >= filter.rating : true)
  );

  const handleAddMovie = () => {
    const newMovie = {
      title: 'New Movie',
      description: 'New movie description',
      posterURL: 'new_movie.jpg',
      rating: 7.0,
    };
    setMovies([...movies, newMovie]);
  };

  return (
    <div className="app">
      <h1>My Movie Collection</h1>
      <button onClick={handleAddMovie}>Add New Movie</button>
      <Filter setFilter={setFilter} />
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;
