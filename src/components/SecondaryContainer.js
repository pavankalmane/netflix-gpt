import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const moviesList = useSelector((state) => state.movies);
  return (
    <div>
      <MovieList title="Now Playing" movies={moviesList.nowPlaying} />
      <MovieList title="Popular" movies={moviesList.popular} />
      <MovieList title="Top Rated" movies={moviesList.topRated} />
      <MovieList title="Upcoming" movies={moviesList.upcoming} />
    </div>
  )
}

export default SecondaryContainer