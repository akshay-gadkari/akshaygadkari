import React, { Component } from 'react';

class Nav extends Component {
    render() {
	return (
            <div className="Nav">
	      <a href="localhost:3000/">Home</a>
              <a href="localhost:3000/posts">Posts</a>
              <a href="localhost:3000/about">About</a>
	    </div>
	);
    }
}

export default Nav;
