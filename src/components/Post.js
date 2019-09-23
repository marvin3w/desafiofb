import React from 'react';

import Comment from './Comment';

function Post({ post }){
  return(
    <div className="post">
      <header>
        <figure>
          <img src={post.author.avatar} />
        </figure>
        <div className="details">
          <div className="name">
            {post.author.name}
          </div>
          <div className="date-post">
            {post.date}
          </div>
        </div>
      </header>
      <div className="post-content">
        {post.content}
      </div>
      <div className="comments">
        {post.comments.map(comment =>
          <Comment key={comment.id} comment={comment} />
        )}
      </div>
    </div>
  )
}

export default Post;