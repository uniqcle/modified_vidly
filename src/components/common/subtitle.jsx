import React, { Component } from 'react';
import Select from 'react-select'

class Subtitle extends Component {

    render() {
        const { allSubtitles, onSelect } = this.props;

        return (

            <>
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlSelect1">Subtitles</label>
                            <select className="form-control form-control-sm" id="exampleFormControlSelect1" onChange={onSelect} >
                                {allSubtitles.map(sub => {
                                    return (<option key={sub._id} value={sub._id}  > {sub.name}</option>)
                                })}
                            </select>
                        </div></div>

                </div >

            </>
        );
    }
}

export default Subtitle;