import { useContext, useEffect } from 'react';

import { MoviesContext } from '../store/movies-store';

import { API_METHODS } from './api';
import useFetch from './fetch.hook';

export const useMovies = () => {
  const { data } = useFetch(API_METHODS.MOVIES);
  const { movies, setMovies } = useContext(MoviesContext);

  useEffect(() => {
    setMovies(data || []);
  }, [data, setMovies]);

  return {
    movies,
  };
};
