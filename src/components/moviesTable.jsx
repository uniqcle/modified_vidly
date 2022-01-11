import React, { Component } from "react";
import auth from './services/authService'
import Table from "./common/table";
import Likes from "./common/like";
import { Link } from 'react-router-dom'


export default class MoviesTable extends Component {
    columns = [
        { column: "title", label: "Title", content: movie => <Link to={`/movies/${movie._id}`}>{movie.title}</Link> },
        { column: "genre.name", label: "Genre" },
        { column: "numberInStock", label: "Stock" },
        { column: "dailyRentalRate", label: "Rate" },
        {
            key: "stock",
            content: (movie) => (
                <Likes liked={movie.liked} onClick={() => this.props.onLike(movie)} />
            ),
        }

    ];


    deleteColumn = {
        key: "rate",
        content: (movie) => (
            <button
                onClick={() => this.props.onDelete(movie)}
                className="btn btn-danger btn-sm"
            >
                Delete
            </button>
        ),
    }


    constructor() {
        super()
        const user = auth.getCurrentUser();
        if (user && user.isAdmin)
            this.columns.push(this.deleteColumn)
    }

    render() {
        const { movies, sortColumn, onSort } = this.props;

        return (
            <>
                <Table
                    columns={this.columns}
                    data={movies}
                    sortColumn={sortColumn}
                    onSort={onSort}
                    sortColumn={sortColumn}
                />
            </>
        );
    }
}

