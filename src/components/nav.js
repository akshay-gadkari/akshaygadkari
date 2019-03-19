import React, { Component } from 'react';
import styled from "styled-components";

const Navlink = styled.a`
padding-right: 25px;
padding-top: 20px;
font-size: 35px;
text-decoration: none;
//background: lightblue;
color: gray;
&:hover {
background: white;
border: 10px solid white;
}
`;

const Navbar = styled.div`
padding-left: 15px;
background: lightblue;
`;

class Nav extends Component {
    render() {
	return (
            <Navbar>
	      <Navlink href="localhost:3000/">Home</Navlink>
              <Navlink href="localhost:3000/posts">Posts</Navlink>
              <Navlink href="localhost:3000/about">About</Navlink>
	    </Navbar>
	);
    }
}

export default Nav;
