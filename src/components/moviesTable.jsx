import React, { Component } from 'react';
import Like from "./common/like";


class MoviesTable extends Component {

    raiseSort = (sort) => {

        const sortColumn = { ...this.props.sortColumn }
        if (sortColumn.sort === sort)
            sortColumn.order = (sortColumn.order === 'asc') ? 'desc' : 'asc'
        else {
            sortColumn.sort = sort;
            sortColumn.order = 'asc'
        }

        this.props.onSort(sortColumn)
    }

    render() {

        const { movies, onDelete, onLike } = this.props;

        return (<>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th onClick={() => this.raiseSort("title")}>Title</th>
                        <th onClick={() => this.raiseSort("genre")}>Genre</th>
                        <th onClick={() => this.raiseSort("numberInStock")}>Stock</th>
                        <th onClick={() => this.raiseSort("dailyRentalRate")}>Rate</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {movies.map((movie) => (
                        <tr key={movie._id}>
                            <th scope="row">{movie.title}</th>
                            <td>{movie.genre.name}</td>
                            <td>{movie.numberInStock}</td>
                            <td>{movie.dailyRentalRate}</td>
                            <td>
                                <Like
                                    onClick={() => onLike(movie)}
                                    liked={movie.liked}
                                />
                            </td>
                            <td>
                                <button
                                    onClick={() => onDelete(movie)}
                                    className="btn btn-danger btn-sm"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>);
    }
}

export default MoviesTable;
