import { createContext } from 'react';

import { makeAutoObservable, observable } from 'mobx';

type Movie = {
  id: string;
  name: string;
  price: number;
};

class MovieStore {
  movies: Movie[] = observable([]);

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  setMovies(data: Movie[]) {
    this.movies = data;
  }
}

export const MoviesContext = createContext(new MovieStore());
