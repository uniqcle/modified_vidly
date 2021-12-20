import React, { Component } from 'react';

class MovieForm extends Component {

    render() {
        const { match, history } = this.props;

        return (<>
            <h2>Movie {match.params.id}</h2>
            <button className="btn btn-primary" onClick={() => history.push('/movies')}>Save</button>
        </>);
    }
}

export default MovieForm;