import React, { Component } from "react";
import { getGenres } from "./services/genreService";
import { getMovies, deleteMovie } from "./services/movieService";
import { getSubtitles } from './services/fakeSubtitleService'
import Pagination from "./common/pagination";
import { paginate } from "./utils/paginate";
import ListGroup from "./common/listGroup";
import Subtitle from "./common/subtitle";
import MoviesTable from "./moviesTable";
import SearchBox from "./searchBox";
import { Link } from 'react-router-dom'
import _ from 'lodash'
import { toast } from 'react-toastify'

class Movies extends Component {
  state = {
    movies: [],
    pageSize: 4,
    currentPage: 1,
    allGenres: [],
    allSubtitles: [],
    sortColumn: { sort: 'title', order: 'asc' },
    searchQuery: "",
    selectedGenre: null
  };

  async componentDidMount() {
    const { data } = await getGenres();
    const allGenres = [{ _id: "", name: 'All genres' }, ...data]
    const allSubtitles = [...getSubtitles()]

    const { data: movies } = await getMovies();
    this.setState({ movies, allGenres, allSubtitles });
  }

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handleDelete = async (movie) => {
    const originalMovies = this.state.movies;

    let movies = originalMovies.filter((item) => {
      return item._id !== movie._id;
    });
    this.setState({ movies });

    try {
      await deleteMovie(movie._id);
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        toast.error('This movie has already been deleted')
      this.setState({ movies: originalMovies })
    }

  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleGenreSelect = (genre) => {

    this.setState({ selectedGenre: genre, searchQuery: "", currentPage: 1 })
  };

  handleSubtitleChange = (e) => {
    this.setState({ selectedSubtitle: e.target.value })
  }

  handleSort = (sortColumn) => {
    this.setState({ sortColumn })
  }


  handleSearch = query => {
    console.log(query)
    this.setState({ searchQuery: query, selectedGenre: null, currentPage: 1 })
  }


  getPagedData = () => {
    const { movies: allMovies, selectedGenre, pageSize, currentPage, sortColumn, searchQuery } = this.state;


    let filtered = allMovies;
    if (searchQuery)
      filtered = allMovies.filter(m => m.title.toLowerCase().startsWith(searchQuery.toLowerCase()))
    else if (selectedGenre && selectedGenre._id)
      filtered = allMovies.filter(m => m.genre._id === selectedGenre._id);

    //const filtered = selectedGenre && selectedGenre._id ? allMovies.filter(m => m.genre._id === selectedGenre._id) : allMovies;

    // let filtered = allMovies;
    // if (searchQuery)
    //   filtered = allMovies.filter(m =>
    //     m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
    //   );
    // else if (selectedGenre && selectedGenre._id)
    //   filtered = allMovies.filter(m => m.genre._id === selectedGenre._id);



    const sorted = _.orderBy(filtered, [sortColumn.sort], [sortColumn.order])

    //const filteredSub = selectedSubtitle ? allMovies.filter(m => m.subtitle._id === selectedSubtitle) : allMovies;

    const movies = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: movies }
  }

  render() {
    const { movies: allMovies, pageSize, currentPage, allGenres, allSubtitles, sortColumn, searchQuery } = this.state;

    const { user } = this.props;

    // if (allMovies.length === 0) return <p>There are no movies </p>;

    const { totalCount, data: movies } = this.getPagedData();

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

              {user &&
                (<Link to="/movies/new" className="btn btn-primary" style={{ marginBottom: 20 }}>New Movie</Link>)
              }
              <p>There are {totalCount} movies </p>


              <SearchBox value={searchQuery} onChange={this.handleSearch} />

              <MoviesTable
                movies={movies}
                onDelete={this.handleDelete}
                onSort={this.handleSort}
                onLike={this.handleLike}
                onSort={this.handleSort}
                sortColumn={sortColumn}
              />

              <Pagination
                itemsCount={totalCount}
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
