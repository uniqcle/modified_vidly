import React, { Component } from 'react';
import Input from './common/input'

class LoginForm extends Component {

    state = {
        account: {
            username: '',
            password: ''
        }
    }

    username = React.createRef();

    // componentDidMount() {
    //     this.username.current.focus();
    // }

    handleSubmit = (e) => {
        e.preventDefault();


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
        const { account } = this.state;

        return (<>

            <div className="container">

                <h2>Login</h2>

                <form onSubmit={this.handleSubmit}>

                    <Input name="username" value={account.username} onChange={this.handleChange} label="Username" />

                    <Input name="password" value={account.password} onChange={this.handleChange} label="Password" />

                    <button className="btn btn-primary" > Submit</button>
                </form>
            </div>
        </>);
    }
}

export default LoginForm;