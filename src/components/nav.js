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
// &:active {
// background: white;
// }
`;

const Navbar = styled.div`
padding-left: 15px;
background: lightblue;
position: fixed;
top: 0;
width: 100%;
`;

class Nav extends Component {
    render() {
	return (
            <Navbar>
	      <Navlink href="https://akshaygadkari.netlify.com/">Home</Navlink>
              <Navlink href="https://akshaygadkari.netlify.com/posts">Posts</Navlink>
              <Navlink href="https://akshaygadkari.netlify.com/about">About</Navlink>
	      <Navlink href="https://akshaygadkari.netlify.com/resume">Resume</Navlink>
	    </Navbar>
	);
    }
}

export default Nav;
