import React, { Component } from 'react';
import axios from 'axios';
import Posts from './components/posts.js';
import About from './components/about.js';
import Home from './components/home.js';
import Nav from './components/nav.js';
import Resume from './components/resume.js';
import styled from "styled-components";

import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink
} from "react-router-dom";

const Footer = styled.header`
font-weight: bold;
display: flex;
flex-direction: row;
justify-content: space-between;
max-width: 400px;
margin-left: 30px;
margin-top: 15px;
margin-bottom: 15px;
`;

const A = styled.a`
font-size: 20px;
text-decoration: none;
font-size: 25px;
color: #AB987A;
&:hover {
color: #FF533D;
font-size: 29px;
}
`;

const Background = styled.div`
//background: lightgray;
`;

document.title = 'Akshay Gadkari';

class App extends Component {
    render() {
	return (
	    <Background>
	      <nav className="navbar">
		<Route path='/' component={Nav} />
	      </nav>
	      <Route exact path='/' component={Home} />
	      <Route path='/posts' component={Posts} />
	      <Route path='/resume' component={Resume} />
              <Footer>
		<A
		  href="https://github.com/akshay-gadkari/"
		  target="_blank"
		  rel="noopener noreferrer"
		  >
		  GitHub
		</A>
		<A
		  href="https://www.linkedin.com/in/akshay-g-265b9280/"
		  target="_blank"
		  rel="noopener noreferrer"
		  >
		  LinkedIn
		</A>
		<A
		  href="mailto:akshay.gadkari@gmail.com"
		  target="_blank"
		  rel="noopener noreferrer"
		  >
		  Email Me
		</A>
              </Footer>
	    </Background>
	);
    }
}

export default App;
