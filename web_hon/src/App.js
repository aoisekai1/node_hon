import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

/** Pages */
import Home from "../src/pages/home/home";
import Posts from "../src/pages/posts/posts";
import Genres from "../src/pages/genres/genres";

/** Error Pages */
import NoMatch from "../src/pages/error";
class App extends Component {
  render() {
    return (
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
              <li className="nav-item"><Link to="/posts" className="nav-link">Posts</Link></li>
              <li className="nav-item"><Link to="/genres" className="nav-link">Genres</Link></li>
            </ul>
          </div>
        </nav>

        <div className="container-fluid">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/posts" exact component={Posts} />
            <Route path="/genres" exact component={Genres} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
