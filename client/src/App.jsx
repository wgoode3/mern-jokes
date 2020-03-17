import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Joke from './components/Joke.jsx';
import { Router, Link } from '@reach/router';
import Edit from './components/Edit.jsx';


function App() {
  return (
    <div className="container">
      <div className="jumbotron">
        <h1>Jokes</h1>
        <nav>
          <Link to="/" >Home</Link>
          {" | "}
          <Link to="new">New</Link>
        </nav>
      </div>
      <Router>
        <Joke path="/" />
        <Edit path="/edit/:_id" />
      </Router>
    </div>
  );
}

export default App;
