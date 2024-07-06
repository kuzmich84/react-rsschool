import React from 'react';
import Movie, { MovieProps } from './Movie';

export interface MovieListProps {
  movies: MovieProps[];
}

interface MovieListState {}

class MovieList extends React.Component<MovieListProps, MovieListState> {
  constructor(props: MovieListProps) {
    super(props);
  }

  render() {
    return (
      <ul className="movie-list">
        {this.props.movies.map((movie) => (
          <Movie {...movie} key={movie.imdbID} />
        ))}
      </ul>
    );
  }
}

export default MovieList;
