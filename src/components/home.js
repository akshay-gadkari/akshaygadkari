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
//flex-direction: row;
`;

const Split = styled.div`
display: flex;
flex-direction: row;
width: 100%;
`;

const Main = styled.div`
//margin: auto;
width: 50%;
height: 50%;
justify-content: space-between;
//flex-direction: row;
`;

const H2 = styled.h2`
margin:auto;
width: 50%;
text-align: center;
margin-bottom: 10px;
`;

const H3 = styled.h3`
margin:auto;
width: 50%;
text-align: center;
`;

const Projects = styled.div`
//flex-direction: row;
width: 50%;
`;

class Home extends Component {
    render() {
	return (
            <MyHome className="myHome">
              <h1>Home</h1>
              <Split>
		<Main>
		  <Image class="center" alt="profile pic" src={profile}/>
                  <br/>
		  <H2>Akshay Gadkari</H2>
		  <H3>(408) 807-6119</H3>
		</Main>
		<Projects>
		  <h2>Projects</h2>
		  <a href="https://movebytes.com">MoveBytes</a>
		  <p>A file sharing app that lets you share files with anyone.</p>
		</Projects>
	      </Split>
	    </MyHome>
	);
    }
}

export default Home;
