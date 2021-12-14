import React, { Component, createContext } from 'react';
import Like from "./common/like";

const MoviesTable = (props) => {

    const { movies, onDelete, onLike, onSort } = props;

    return (
        <>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th onClick={() => onSort("title")}>Title</th>
                        <th onClick={() => onSort("genre")}>Genre</th>
                        <th onClick={() => onSort("numberInStock")}>Stock</th>
                        <th onClick={() => onSort("dailyRentalRate")}>Rate</th>
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
        </>)
}

export default MoviesTable; 