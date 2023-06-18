import { API_METHODS } from './api';
import useFetch from './fetch.hook';

export const useMovieDetails = (id: string) => {
  const { data: movieDetails } = useFetch(
    `${API_METHODS.MOVIE_DETAILS}${id}`,
  );

  return {
    movieDetails,
  };
};
