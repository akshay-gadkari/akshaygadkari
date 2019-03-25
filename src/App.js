import React, { Component } from 'react';
import axios from 'axios';
import Posts from './components/posts.js';
import About from './components/about.js';
import Home from './components/home.js';
import Nav from './components/nav.js';
import Resume from './components/resume.js';

import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink
} from "react-router-dom";

class App extends Component {
    // componentDidMount() {
    // 	axios
    // 	    .get('http://localhost:3000/posts/')
    // 	    .then(response => {
    // 		const notes = response.data;
    // 		this.setState({notes});
    // 	    })
    // 	    .catch(err => console.log(err));
    // }

    render() {
	return (
	    <div className="App">
	      <nav className="navbar">
		<Route path='/' component={Nav} />
	      </nav>
	      <Route exact path='/' component={Home} />
	      <Route path='/posts' component={Posts} />
	      <Route path='/about' component={About} />
	      <Route path='/resume' component={Resume} />
              <header className="App-header">
		<p>
		  Edit <code>src/App.js</code> and save to reload.
		</p>
		<a
		  className="App-link"
		  href="https://github.com/akshay-gadkari/"
		  target="_blank"
		  rel="noopener noreferrer"
		  >
		  GitHub
		</a>
              </header>
	    </div>
	);
    }
}

export default App;
