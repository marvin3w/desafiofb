import React from 'react';

function Comment({ comment }){
  return(
    <div className="comment-body">
      <figure>
        <img src={comment.author.name} />
      </figure>
      <div className="comment-content">
        <b>{comment.author.name}</b> {comment.content}
      </div>
    </div>
  )
}

export default Comment;