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
	    </MyHome>
	);
    }
}


//    <img alt="profile pic" src="../assets/akshay.jpeg"/>


// Post.defaultProps = {
//     notes: []
// };

export default Home;
