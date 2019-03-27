import React, { Component } from 'react';
import profile from '../assets/akshay.jpeg';
import styled from "styled-components";

const Image = styled.img`
width: 20%;
max-width: 200px;
height: 20%;
max-height: 200px;
display: block;
margin-left: auto;
margin-right: auto;
`;

const MyHome = styled.div`
margin-left: 30px;
margin-top: 60px;
`;

const Main = styled.div`
margin: auto;
width: 80%;
justify-content: space-between;
flex-direction: row;
`;

const H2 = styled.h2`
margin:auto;
width: 50%;
text-align: center;
margin-bottom: 10px;
`;


// const H3 = styled.h3`
// margin:auto;
// width: 50%;
// text-align: center;
// `;


class Home extends Component {
    render() {
	return (
            <MyHome className="myHome">
              <h1>Home</h1>
              <Main>
		<Image class="center" alt="profile pic" src={profile}/>
                <br/>
		<H2>Akshay Gadkari</H2>
		<H2>akshay.gadkari@gmail.com</H2>
		<H2>(408) 807-6119</H2>
	      </Main>
              <br/>
	      <h2>Projects</h2>
	      <a href="https://movebytes.com">MoveBytes</a>
              <p>A file sharing app that lets you share files with anyone.</p>
	    </MyHome>
	);
    }
}

export default Home;
