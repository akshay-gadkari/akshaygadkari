import React, { Component } from 'react';
import styled from "styled-components";

const MyPosts = styled.div`
margin-left: 15px;
`;

class Posts extends Component {
    render() {
	return (
            <MyPosts className="myPosts">
              <h1>Posts</h1>
	    </MyPosts>
	);
    }
}




// Post.defaultProps = {
//     notes: []
// };

export default Posts;
