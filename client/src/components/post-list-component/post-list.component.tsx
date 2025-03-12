import React, { useEffect, useState } from 'react';
import { Posts } from '../../types/post-types/post-types';
import { getPosts } from '../../api/posts-service/api-posts';
import './post-list.component.css';
import CommentForm from '../comments-form-component/comments-form.component';
import CommentList from '../comments-list-component/comments-list.component';

interface PostListProps {
  onNewPost: boolean;
}

const PostList: React.FC<PostListProps> = ({ onNewPost }) => {
  const [posts, setPosts] = useState<Posts>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isNewComment, setIsNewComment] = useState<boolean>(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await getPosts();
        setPosts(response.data);
      } catch (err) {
        setError(`Failed to load posts. : ${err}`);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [onNewPost]);

  return (
    <div className="post-list-container">
      <h2 className="post-list-title">Recent Posts</h2>

      {loading && <p>Loading...</p>}
      {error && <p className="text-danger">{error}</p>}

      <div className="row">
        {Object.values(posts)
          .flat()
          .map((post) => (
            <div key={post.id} className="col-md-6 col-lg-6">
              <div className="card post-card">
                <div className="card-body">
                  <h5 className="card-title">{post.title}</h5>
                  <p className="card-text">{post.content}</p>
                  <CommentList postId={post.id} onNewComment={isNewComment} />
                  <CommentForm postId={post.id} onCommentSubmit={setIsNewComment} />
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default PostList;
