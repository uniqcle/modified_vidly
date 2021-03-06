import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";
import * as userService from "./services/userService";
import auth from './services/authService'

class RegisterForm extends Form {
  state = {
    data: {
      username: "",
      password: "",
      name: "",
    },
    errors: {},
  };

  schema = {
    username: Joi.string().email().required().label("Username"),
    password: Joi.string().min(5).required().label("Password"),
    name: Joi.string().required().label("Name"),
  };

  doSubmit = async () => {
    // call the server
    //const username = this.username.current.value;
    try {
      const response = await userService.register(this.state.data);

      //console.log(response.headers);
      auth.loginWithJwt(response.headers["x-auth-token"]);
      // this.props.history.push("/");
      window.location = "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    return (
      <>
        <div className="container">
          <h2>Register Form</h2>

          <form onSubmit={this.handleSubmit}>
            {this.renderInput("username", "Username")}
            {this.renderInput("password", "Password", "password")}
            {this.renderInput("name", "Name")}
            {this.renderButton("Submit")}
          </form>
        </div>
      </>
    );
  }
}

export default RegisterForm;
