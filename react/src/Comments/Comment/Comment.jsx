import React from 'react';
import './Comment.css';

function Comment({ title, description, author, date }){
    return <div className="listing-details">
                <div className="my-listing-details-comment">
                    <p id="auto-title">{title}</p>
                    <p id="description-title">Description:</p>
                    <p id="description-para">{description}</p>
                    <div className="listing-props">
                        <h3>Author: {author}</h3>
                        <h3>Date created: {date}</h3>
                    </div>
                </div>
            </div>
}

export default Comment;