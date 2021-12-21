import React, { Component } from 'react';
import Form from './common/form'
import Joi, { errors } from 'joi-browser'

class RegisterForm extends Form {

    state = {
        data: {
            username: '',
            password: '',
            name: ''
        },
        errors: {}
    }

    schema = {
        username: Joi.string().email().required().label("Username"),
        password: Joi.string().min(5).required().label("Password"),
        name: Joi.string().required().label('Name')
    }


    doSubmit = () => {
        // call the server
        //const username = this.username.current.value;
        console.log('registered... ')
    }


    render() {
        return (
            <>
                <div className="container">
                    <h2>Register Form</h2>

                    <form onSubmit={this.handleSubmit}>
                        {this.renderInput('username', 'Username')}
                        {this.renderInput('password', 'Password', 'password')}
                        {this.renderInput('name', 'Name')}
                        {this.renderButton('Submit')}
                    </form>
                </div>

            </>);
    }
}

export default RegisterForm;