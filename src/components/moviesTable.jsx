import React, { Component } from 'react';
import Like from "./common/like";
import TableHeader from './common/tableHeader';


class MoviesTable extends Component {
    columns = [
        { sort: "title", label: "Title" },
        { sort: "genre", label: "Genre" },
        { sort: "numberInStock", label: "Stock" },
        { sort: "dailyRentalRate", label: "Rate" },
        { key: "like" },
        { key: "delete" }
    ]


    render() {

        const { movies, onDelete, onLike, onSort, sortColumn } = this.props;

        return (<>
            <table className="table">

                <TableHeader columns={this.columns} sortColumn={sortColumn} onSort={onSort} />

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
