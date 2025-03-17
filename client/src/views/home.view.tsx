import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PostForm from '../components/posts-form-component/posts-form.component';
import PostList from '../components/post-list-component/post-list.component';

const HomeView: React.FC = () => {
  const [isNewPost, setIsNewPost] = useState(false);

  const handleNewPost = (newPost: boolean) => {
    setIsNewPost(newPost);
  };

  const resetNewPost = () => {
    setIsNewPost(false);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <PostForm onPostSubmit={handleNewPost} />
          <PostList onNewPost={isNewPost} resetNewPost={resetNewPost} />
        </div>
      </div>
    </div>
  );
};

export default HomeView;
