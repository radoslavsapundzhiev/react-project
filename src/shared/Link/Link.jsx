import React from 'react';
import './Link.css';

function Link({ children, url, className }) {
    return <a className={className} href={url}>{children}</a>;
};

export default Link;