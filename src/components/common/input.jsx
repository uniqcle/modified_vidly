import React, { Component } from 'react';

const Input = ({ name, label, value, onChange, error }) => {

    return (
        <>
            <div className="form-group">
                <label htmlFor={name} className="form-label">{label}</label>
                <input
                    // autoFocus ref={this.username}
                    value={value}
                    onChange={onChange}
                    className="form-control"
                    id={name}
                    type="text"
                    name={name}
                />
                {error && <div className="alert alert-danger">{error}</div>}

            </div>
        </>
    )
}

export default Input; 