import React, { Component } from 'react';
import styled from "styled-components";

const MyPosts = styled.div`
//margin-left: 15px;
margin-top: 60px;
background: #0F1626;
color: #F5F5F5;
padding: 1% 1%;
`;

const Post = styled.div`
margin-left: 15px;
margin-right: 30px;
padding: 0 30px 0 30px;
max-width: 1200px;
//border: 1px solid #F5F5F5;
//border-radius: 6px;
`;

const Header = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
`;

class Posts extends Component {
    render() {
	return (
            <MyPosts className="myPosts">
              <h1>Posts</h1>
              <Post>
                <Header>
		  <h2>Thinking Like A Dev</h2>
                  <p>March 22, 2019</p>
		</Header>
		<p>Planning as a developer was difficult for me in the beginning because I generally have an unfocused mind. When I test out some code that doesn't work immediately (which is most unfamiliar code) my first instinct is to leave and come back to it. Unfortunately, the real world does not give you enough time for that, and neither did my coding bootcamp. I had to figure out a way to focus more easily. After a while I set into a pattern based on switching between active tasks.</p>
		<p>This approach may seem inefficient. Many people talk about "switching costs" when they work, and how they cannot keep focus on multiple things at a time. To deal with that issue, I kept meticulous records of what needed to get done. This made sure that I was never idle. If I switched away from one task, I always had something I could work on next. If I ran into a roadblock with one part of the codebase, I put it on the backburner and switched to something else immediately. This kept my focus at 100% during my projects. When I returned to what had been bothering me after doing something else, it usually turned out to be a simple syntax error, or something I needed to refactor anyways.</p>
		<p>Occasionally it was a more serious issue, and I needed to spend more time looking through docs and figuring out what was wrong at the systemic level. If I got stuck at this portion, I used the same method: switching to something else for just a bit to refresh my mind before going back to looking at docs.</p>
	      </Post>
	    </MyPosts>
	);
    }
}




// Post.defaultProps = {
//     notes: []
// };

export default Posts;
