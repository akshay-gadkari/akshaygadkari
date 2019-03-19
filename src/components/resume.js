import React, { Component } from 'react';
const path = '../assets/Resume.pdf';

class Resume extends Component {
    render() {
	return (
	    <div>
	      <iframe width="100%" height="1250px" src="https://www.docdroid.net/4NYYeAE/resume.pdf" frameborder="0" allowtransparency allowfullscreen></iframe>
	    </div>
	);
    }
}


export default Resume;
