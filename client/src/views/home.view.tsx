import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import PostForm from '../components/posts-form-component/posts-form.component';
import PostList from '../components/post-list-component/post-list.component';

const HomeView: React.FC = () => {
  const [isNewPost, setIsNewPost] = useState(false);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <PostForm onPostSubmit={setIsNewPost} />
          <PostList onNewPost={isNewPost} />
        </div>
      </div>
    </div>
  );
};

export default HomeView;
