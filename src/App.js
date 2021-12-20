import './App.css';
import Movies from './components/movies'
import MovieForm from './components/movieForm';
import Customers from './components/customers';
import Rentals from './components/rentals'
import Navbar from './components/navbar';
import LoginForm from './components/loginForm';
import { Switch, Route, Redirect } from 'react-router-dom'
import NotFound from './components/notFound';

function App() {
  return (
    <>
      <Navbar />

      <main className="container">

        <Switch>
          <Route path="/login" component={LoginForm} />
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
