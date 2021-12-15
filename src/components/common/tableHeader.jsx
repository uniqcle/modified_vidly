import React, { Component } from 'react';

class TableHeader extends Component {

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
        return (

            <>

                <thead className="thead-dark">
                    <tr>
                        { }

                        <th onClick={() => this.raiseSort("title")}>Title</th>
                        <th onClick={() => this.raiseSort("genre")}>Genre</th>
                        <th onClick={() => this.raiseSort("numberInStock")}>Stock</th>
                        <th onClick={() => this.raiseSort("dailyRentalRate")}>Rate</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>

            </>
        );
    }
}

export default TableHeader;