import React, { Component } from 'react';
import styled from "styled-components";
const path = '../assets/Resume.pdf';

const MyResume = styled.div`
margin-top: 50;
`;

class Resume extends Component {
    render() {
	return (
	    <MyResume>
	      <iframe width="100%" height="1500px" src="https://www.docdroid.net/5Czd7vz/resume-17-creddle.pdf" frameborder="0" allowtransparency allowfullscreen></iframe>
	    </MyResume>
	);
    }
}


export default Resume;
