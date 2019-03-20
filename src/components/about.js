import React, { Component } from 'react';
import styled from "styled-components";

const MyAbout = styled.div`
margin-left: 15px;
`;

class About extends Component {
    render() {
	return (
            <MyAbout className="myAbout">
              <h1>About Me</h1>
	      <a href="https://github.com/akshay-gadkari/">GitHub</a>
              <br/>
	      <a href="https://www.linkedin.com/in/akshay-g-265b9280/">LinkedIn</a>
	    </MyAbout>
	);
    }
}




// Post.defaultProps = {
//     notes: []
// };

export default About;
