import React from 'react';
import Comment from './Comment/Comment';

class Comments extends React.Component{
    render(){
        const { comments } = this.props;
        return <div id="car-listings">
            <h2>COMMENTS</h2>
            {comments ? 
                <div id="listings-comment">
                    {comments.map((comment) => <Comment key={comment._id} id={comment._id} isLogged={this.props.isLogged} title={comment.title} author={comment.author.username} description={comment.description} date={comment.date}></Comment>)}
                </div> : <div>Loading...</div>
            }        
        </div>

    }
}

export default Comments;