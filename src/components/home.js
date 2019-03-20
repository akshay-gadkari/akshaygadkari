import React, { Component } from 'react';
import profile from '../assets/akshay.jpeg';
import styled from "styled-components";

const Image = styled.img`
width: 20%;
max-width: 200px;
height: 20%;
max-height: 200px;
`;

const MyHome = styled.div`
margin-left: 15px;
`;

class Home extends Component {
    render() {
	return (
            <MyHome className="myHome">
              <h1>Home</h1>
              <Image alt="profile pic" src={profile}/>
              <h2>Akshay Gadkari</h2>
              <h3>akshay.gadkari@gmail.com</h3>
              <h3>(408) 807-6119</h3>
              <h2>Projects</h2>
	      <a href="https://movebytes.com">MoveBytes</a>
              <p>A file sharing app that lets you share files with anyone.</p>
	    </MyHome>
	);
    }
}

export default Home;
