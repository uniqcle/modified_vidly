import React, { Component } from "react";
import Table from "./common/table";
import Likes from "./common/like";

export default class MoviesTable extends Component {
    columns = [
        { column: "title", label: "Title" },
        { column: "genre.name", label: "Genre" },
        { column: "numberInStock", label: "Stock" },
        { column: "dailyRentalRate", label: "Rate" },
        {
            key: "stock",
            content: (movie) => (
                <Likes liked={movie.liked} onClick={() => this.props.onLike(movie)} />
            ),
        },
        {
            key: "rate",
            content: (movie) => (
                <button
                    onClick={() => this.props.onDelete(movie)}
                    className="btn btn-danger btn-sm"
                >
                    Delete
                </button>
            ),
        },
    ];

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

