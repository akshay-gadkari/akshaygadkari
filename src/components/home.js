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
padding-left: 30px;
margin-top: 60px;
background: #0F1626;
`;

const Split = styled.div`
display: flex;
flex-direction: row;
width: 100%;
`;

const Main = styled.div`
width: 50%;
height: 50%;
min-height: 800px;
justify-content: space-between;
padding-top: 2.5%;
`;

const H2 = styled.h2`
margin:auto;
width: 50%;
text-align: center;
margin-bottom: 10px;
color: #F5F5F5;
font-weight: bold;
font-size: 35px;
`;

const H3 = styled.h3`
margin:auto;
width: 50%;
text-align: center;
color: #F5F5F5;
font-weight: bold;
font-size: 25px;
`;

const Projects = styled.div`
//flex-direction: row;
width: 50%;
color: #F5F5F5;
padding-top: 1.5%;
`;

const A = styled.a`
color: #F5F5F5;
font-size: 30px;
font-weight: bold;
`;

class Home extends Component {
    render() {
	return (
            <MyHome className="myHome">
              <Split>
		<Main>
                  <H2>Home</H2>
		  <Image class="center" alt="profile pic" src={profile}/>
                  <br/>
		  <H2>Akshay Gadkari</H2>
		  <H3>(408) 807-6119</H3>
		</Main>
		<Projects>
		  <h2>Projects</h2>
		  <A href="https://sharebigfiles.netlify.com">MoveBytes</A>
		  <p>A file sharing app that lets you share files with anyone.</p>
		  <p>A file sharing app that lets you share files with anyone.</p>
		  <p>A file sharing app that lets you share files with anyone.</p>
		  <p>A file sharing app that lets you share files with anyone.</p>
		  <p>A file sharing app that lets you share files with anyone.</p>
		  <p>A file sharing app that lets you share files with anyone.</p>
		</Projects>
	      </Split>
	    </MyHome>
	);
    }
}

export default Home;
