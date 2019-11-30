import React from 'react';
import './Navigation.css';
import Link from '../shared/Link/Link';

function Navigation() {
    return <nav>
        <Link className="active" url="#">Home</Link>
        <Link url="#">All Posts</Link>
        <Link url="#">My Posts</Link>
        <Link url="#">Create Post</Link>
        <div id="profile">
            <Link url="#">Welcome username</Link>
            <Link url="#">Logout</Link>
        </div>
    </nav>
};

export default Navigation;
