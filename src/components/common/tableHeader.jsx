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

    renderSortIcon = column => {
        const { sortColumn } = this.props
        if (column.column !== sortColumn.sort) return null;
        if (sortColumn.order === 'asc') return <i className="fa fa-sort-asc"></i>
        return <i className="fa fa-sort-desc"></i>
    }

    render() {

        const { columns } = this.props;
        return (

            <>

                <thead className="thead-dark">
                    <tr >
                        {columns.map(column =>
                            <th
                                style={{ cursor: 'pointer' }}
                                key={column.key || column.column}
                                onClick={() => this.raiseSort(column.column)}>
                                {column.label} {this.renderSortIcon(column)}
                            </th>
                        )}
                    </tr>
                </thead>

            </>
        );
    }
}

export default TableHeader;