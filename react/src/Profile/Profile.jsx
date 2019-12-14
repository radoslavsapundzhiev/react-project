import React from 'react';
import './Profile.css';
import userService from '../service/user-service';

class Profile extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        posts: null,
        comments: null
      }
    }

    componentDidMount(){
      userService.profile().then(user => {
        this.setState({ posts: user.posts.length, comments: user.comments.length });
      })
    }

    render(){
      const { username } = this.props;
      const { posts, comments } = this.state;
      return <div className="user-profile">
            <h1>user</h1>
            <h2>{username}</h2>
            <h3>Posts: {posts}</h3>
            <h3>Comments: {comments}</h3>
            <a id="deleteUserButton" href="/profile">DELETE USER!</a>
      </div>
    }
}

export default Profile;

// export default function Profile() {
//     return <div className="profile">
//       <img src="" alt="profle" />
//       <div className="personal-info">
//         <p>
//           <span>Username:</span>
//           Pesho
//         </p>
//         <p>
//           <span>Posts:</span>
//           100000
//         </p>
//       </div>
//     </div>;
//   }