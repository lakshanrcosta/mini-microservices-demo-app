import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import PostForm from '../components/posts-form-component/posts-form.component';

const HomeView: React.FC = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <PostForm />
        </div>
      </div>
    </div>
  );
};

export default HomeView;
