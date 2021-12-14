import React, { Component } from "react";

class ListGroup extends Component {
  render() {
    const { allGenres, onItemSelect, selectedGenre, textProperty, valueProperty } = this.props;
    return (
      <>
        <ul className="list-group">
          {allGenres.map((genre) => (
            <li
              key={genre[valueProperty]}
              onClick={() => onItemSelect(genre)}
              className={genre === selectedGenre ? "list-group-item active" : "list-group-item"}
              style={{ cursor: "pointer" }}
            >
              {genre[textProperty]}
            </li>
          ))}
        </ul>
      </>
    );
  }
}

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default ListGroup;
