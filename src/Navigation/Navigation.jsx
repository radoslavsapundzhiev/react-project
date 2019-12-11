import React from 'react';
import './Navigation.css';

function Navigation({ isLogged, username }) {
    return <nav>
        <a className="active" href="/">Home</a>
        <a href="/all">All Posts</a>
        {isLogged && <a href="/myPosts">My Posts</a>}
        {isLogged && <a href="/create">Create Post</a>}
        <div id="profile">
            {isLogged && <a href="/profile">Welcome, {username}</a>}
            {isLogged && <a href="/logout">Logout</a>}
        </div>
    </nav>
};

export default Navigation;
