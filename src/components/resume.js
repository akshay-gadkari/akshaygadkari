import React, { Component } from 'react';
import styled from "styled-components";
const path = '../assets/Resume.pdf';

const MyResume = styled.div`
margin-top: 60;
`;

class Resume extends Component {
    render() {
	return (
	    <MyResume>
	      <iframe width="100%" height="1250px" src="https://www.docdroid.net/4NYYeAE/resume.pdf" frameborder="0" allowtransparency allowfullscreen></iframe>
	    </MyResume>
	);
    }
}


export default Resume;
