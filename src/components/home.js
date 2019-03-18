import React, { Component } from 'react';
import profile from '../assets/akshay.jpeg';

class Home extends Component {
    render() {
	return (
            <div className="myHome">
              <h1>Home</h1>
              <img alt="profile pic" src={profile}/>
	    </div>
	);
    }
}


//    <img alt="profile pic" src="../assets/akshay.jpeg"/>


// Post.defaultProps = {
//     notes: []
// };

export default Home;
