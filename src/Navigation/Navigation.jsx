import React from 'react';
import './Navigation.css';

function Navigation() {
    return <nav>
        <a className="active" href="/">Home</a>
        <a href="/all">All Posts</a>
        <a href="/myPosts">My Posts</a>
        <a href="/create">Create Post</a>
        <div id="profile">
            <a href="/profile">Welcome username</a>
            <a href="/logout">Logout</a>
        </div>
    </nav>
};

export default Navigation;
