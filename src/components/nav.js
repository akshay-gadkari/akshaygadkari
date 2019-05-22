import React, { Component } from 'react';
import styled from "styled-components";

const Navlink = styled.a`
padding-right: 25px;
padding-top: 20px;
font-size: 30px;
text-decoration: none;
background: white;
font-weight: bold;
color: #AB987A;
&:hover {
font-size: 40px;
color: #FF533D;
}
`;

const Navbar = styled.div`
background: white;
position: fixed;
top: 0;
width: 100%;
padding: 10px 0 0px 15px;
`;

class Nav extends Component {
    render() {
	return (
            <Navbar>
	      <Navlink href="https://akshaygadkari.com/">Home</Navlink>
              <Navlink href="/posts">Posts</Navlink>
	      <Navlink href="/resume">Resume</Navlink>
	    </Navbar>
	);
    }
}

//<Navlink href="https://akshaygadkari.netlify.com/about">About</Navlink>

export default Nav;
