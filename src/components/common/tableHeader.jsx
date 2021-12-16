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

        const { columns } = this.props;
        return (

            <>

                <thead className="thead-dark">
                    <tr>
                        {columns.map(column =>
                            <th key={column.key || column.sort} onClick={() => this.raiseSort(column.sort)}>{column.label}</th>
                        )}
                    </tr>
                </thead>

            </>
        );
    }
}

export default TableHeader;