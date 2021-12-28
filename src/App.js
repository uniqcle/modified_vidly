import './App.css';
import Movies from './components/movies'
import MovieForm from './components/movieForm';
import Customers from './components/customers';
import Rentals from './components/rentals'
import Navbar from './components/navbar';
import LoginForm from './components/loginForm';
import RegisterForm from './components/registerForm';
import { Switch, Route, Redirect } from 'react-router-dom'
import NotFound from './components/notFound';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


function App() {
  return (
    <>
      <ToastContainer />
      <Navbar />

      <main className="container">

        <Switch>
          <Route path="/login" component={LoginForm} />
          <Route path="/register" component={RegisterForm} />
          <Route path="/movies/:id" component={MovieForm} />
          <Route path="/movies" component={Movies} />
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

export default App;
