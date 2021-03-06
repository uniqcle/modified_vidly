import React, { Component } from "react";
//import ProtectedRoute from "./components/common/protectedRoute";
import "./App.css";
import Movies from "./components/movies";
import MovieForm from "./components/movieForm";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import Navbar from "./components/navbar";
import LoginForm from "./components/loginForm";
import Logout from "./components/logout";
import auth from './components/services/authService'
import RegisterForm from "./components/registerForm";
import { Switch, Route, Redirect } from "react-router-dom";
import NotFound from "./components/notFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class App extends Component {
  state = {};

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user })
  }

  render() {
    const { user } = this.state;

    return (
      <>
        <ToastContainer />
        <Navbar user={user} />

        <main className="container">
          <Switch>
            <Route path="/login" component={LoginForm} />
            <Route path="/logout" component={Logout} />
            <Route path="/register" component={RegisterForm} />

            <Route
              path="/movies/:id"
              render={props => {
                if (!user) return <Redirect to="/login" />
                return < MovieForm {...props} />
              }
              } />

            <Route
              path="/movies"
              render={props => <Movies {...props} user={user} />}
            />

            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/" exact component={Movies} />

            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </>
    );
  }
}

export default App;
