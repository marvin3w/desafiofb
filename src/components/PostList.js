import React, { Component } from 'react';

import Post from './Post';

class PostList extends Component{
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Julio Alcantara',
          avatar: 'https://i.pravatar.cc/150?img=3'
        },
        date: '04 Jun 2019',
        content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Diego Fernandes',
              avatar: 'https://i.pravatar.cc/150?img=13'
            },
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pellentesque egestas arcu eget pulvinar. Maecenas venenatis, est non gravida commodo, justo purus viverra urna, malesuada sagittis metus turpis sed mauris. Nullam eleifend eros a elit auctor, ac dignissim leo consequat. Morbi sagittis congue dolor in aliquet."
          }
        ],
      },
      {
        id: 2,
        author: {
          name: 'Nome do Usuário',
          avatar: 'https://i.pravatar.cc/150?img=23'
        },
        date: '04 Jun 2019',
        content: 'Texto do post',
        comments: [
          {
            id: 2,
            author: {
              name: 'Diego Fernandes',
              avatar: 'https://i.pravatar.cc/150?img=33'
            },
            content: "Conteúdo do comentário"
          },
          {
            id: 3,
            author: {
              name: 'Diego Fernandes',
              avatar: 'https://i.pravatar.cc/150?img=43'
            },
            content: "Conteúdo do comentário"
          }
        ],
      }
    ]
  };
  render() {
    return (
      <div className="postlist">
        {this.state.posts.map(post =>
          <Post key={post.id} post={post} />
        )}
      </div>
    );
  }
}

export default PostList;