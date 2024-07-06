import React, { ChangeEvent } from 'react';

interface SearchState {
  search: string;
}

interface SearchProps {
  searchMovies: (search: string, page: number) => void;
  setPage: (page: number, isLoadMore: boolean) => void;
}
class Search extends React.Component<SearchProps, SearchState> {
  state = {
    search: localStorage.getItem('search') || '',
  };

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ search: event.target.value });
  };

  handleClick = () => {
    if (this.state.search) {
      localStorage.setItem('search', this.state.search);
      this.props.searchMovies(this.state.search, 1);
      this.props.setPage(1, false);
    } else {
      this.props.searchMovies('movie', 1);
      this.props.setPage(1, true);
      localStorage.removeItem('search');
    }
  };

  render() {
    return (
      <div className="search-content">
        <input
          type="text"
          placeholder="Try to search a movie..."
          value={this.state.search}
          onChange={this.handleChange}
        />
        <button className="search-button" onClick={this.handleClick}>
          Search
        </button>
      </div>
    );
  }
}

export default Search;
