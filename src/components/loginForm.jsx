import React, { Component } from 'react';
import Input from './common/input'

class LoginForm extends Component {

    state = {
        account: {
            username: '',
            password: ''
        },
        errors: {}
    }

    username = React.createRef();

    // componentDidMount() {
    //     this.username.current.focus();
    // }

    validate = () => {
        const errors = {}

        const { account } = this.state;
        if (account.username.trim() === '')
            errors.username = 'Username is required'
        if (account.password.trim() === '')
            errors.password = 'Password is required'
        return Object.keys(errors).length === 0 ? null : errors;
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const errors = this.validate();
        this.setState({ errors: errors || {} })
        if (errors) return;

        // call the server
        //const username = this.username.current.value;
        console.log('submitted ')
    }

    handleChange = ({ currentTarget: input }) => {
        const account = { ...this.state.account }
        account[input.name] = input.value;
        this.setState({ account })
    }

    render() {
        const { account, errors } = this.state;

        return (<>

            <div className="container">

                <h2>Login</h2>

                <form onSubmit={this.handleSubmit}>

                    <Input
                        name="username"
                        value={account.username}
                        onChange={this.handleChange}
                        label="Username"
                        error={errors.username}

                    />

                    <Input
                        name="password"
                        value={account.password}
                        onChange={this.handleChange}
                        label="Password"
                        error={errors.password}
                    />

                    <button className="btn btn-primary" > Submit</button>
                </form>
            </div>
        </>);
    }
}

export default LoginForm;