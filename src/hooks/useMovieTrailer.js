import React ,{useEffect} from 'react'
import {options} from "../utils/constants";
import { useDispatch } from 'react-redux';
import { addTrailerMovies } from '../utils/moviesSlice';
const useMovieTrailer = (movieId) => {
      const dispatch = useDispatch();
      const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      options
    );
    const json = await data.json();
    console.log(json);

    const filterData = json.results.filter((item) => item.type === "Trailer");
    const trailer = filterData?.length ? filterData[0] : json.results[0];
    dispatch(addTrailerMovies(trailer.key));
    console.log(trailer);
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
  return (
    <div>useMovieTrailer</div>
  )
}

export default useMovieTrailer