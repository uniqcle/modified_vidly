import React, { Component } from 'react';
import Like from "./common/like";
import TableHeader from './common/tableHeader';
import TableBody from './common/tableBody';


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

                <TableBody data={movies} columns={this.columns} onLike={onLike} onDelete={onDelete} />


            </table>
        </>);
    }
}

export default MoviesTable;
