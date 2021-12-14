import React, { Component } from "react";
import { getGenres } from "../services/fakeGenreService";
import { getMovies } from "../services/fakeMovieService";
import { getSubtitles } from '../services/fakeSubtitleService'
import Pagination from "./common/pagination";
import { paginate } from "./utils/paginate";
import ListGroup from "./common/listGroup";
import Subtitle from "./common/subtitle";
import MoviesTable from "./moviesTable";
import _ from 'lodash'

class Movies extends Component {
  state = {
    movies: [],
    pageSize: 4,
    currentPage: 1,
    allGenres: [],
    allSubtitles: [],
    sortColumn: { sort: 'Title', order: 'asc' }
  };

  componentDidMount() {
    const allGenres = [{ _id: "", name: 'All genres' }, ...getGenres()]
    const allSubtitles = [...getSubtitles()]
    this.setState({ movies: getMovies(), allGenres, allSubtitles });
  }

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handleDelete = (movie) => {
    let movies = this.state.movies.filter((item) => {
      return item._id !== movie._id;
    });
    this.setState({ movies });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleGenreSelect = (genre) => {

    this.setState({ selectedGenre: genre, currentPage: 1 })
  };

  handleSubtitleChange = (e) => {
    this.setState({ selectedSubtitle: e.target.value })
  }

  handleSort = (sortColumn) => {
    this.setState({ sortColumn })
  }

  render() {
    const { movies: allMovies, selectedGenre, pageSize, currentPage, allGenres, allSubtitles, sortColumn } = this.state;
    const { length: count } = this.state.movies;

    if (allMovies.length === 0) return <p>There are no movies </p>;


    const filtered = selectedGenre && selectedGenre._id ? allMovies.filter(m => m.genre._id === selectedGenre._id) : allMovies;

    const sorted = _.orderBy(filtered, [sortColumn.sort], [sortColumn.order])

    //const filteredSub = selectedSubtitle ? allMovies.filter(m => m.subtitle._id === selectedSubtitle) : allMovies;

    const movies = paginate(sorted, currentPage, pageSize);

    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <ListGroup
                allGenres={allGenres}
                //default props
                // textProperty="name"
                // valueProperty="_id"
                selectedGenre={this.state.selectedGenre}
                onItemSelect={this.handleGenreSelect}
              />

              <Subtitle allSubtitles={allSubtitles} onSelect={this.handleSubtitleChange} />

            </div>
            <div className="col-md-9">
              <p>There are {filtered.length} movies </p>

              <MoviesTable
                movies={movies}
                onDelete={this.handleDelete}
                onSort={this.handleSort}
                onLike={this.handleLike}
                onSort={this.handleSort}
                sortColumn={sortColumn}
              />

              <Pagination
                itemsCount={filtered.length}
                onPageChange={this.handlePageChange}
                currentPage={currentPage}
                pageSize={pageSize}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Movies;
