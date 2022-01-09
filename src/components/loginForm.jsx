import React, { Component } from 'react';
import Form from './common/form'
import Joi, { errors } from 'joi-browser'
import { login } from './services/authService'

class LoginForm extends Form {

    state = {
        data: {
            username: '',
            password: ''
        },
        errors: {}
    }

    schema = {
        username: Joi.string().required().label("Username"),
        password: Joi.string().required().label("Password")
    }


    username = React.createRef();

    // componentDidMount() {
    //     this.username.current.focus();
    // }


    doSubmit = async () => {
        // call the server
        //const username = this.username.current.value;
        try {
          const { data } = this.state;
          const { data: jwt } = await login(data.username, data.password);

          localStorage.setItem("token", jwt);

          // this.props.history.push("/");
          window.location = "/";
        } catch (ex) {
            if (ex.response && ex.response.status === 400) {
                const errors = { ...this.state.errors }
                errors.username = ex.response.data;
                this.setState({ errors })
            }
        }
    }



    render() {


        return (<>

            <div className="container">

                <h2>Login</h2>

                <form onSubmit={this.handleSubmit}>

                    {this.renderInput('username', 'Username')}
                    {this.renderInput('password', 'Password', 'password')}

                    {this.renderButton('Submit')}
                </form>
            </div>
        </>);
    }
}

export default LoginForm;