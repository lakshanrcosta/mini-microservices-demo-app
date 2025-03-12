import React, { useState } from 'react';
import './posts-form.component.css';
import { createPost } from '../../api/posts-service/api-posts';
import { PostDto } from '../../types/post-types/post-dto-types';

interface PostFormProps {
  onPostSubmit: (newPost: boolean) => void;
}

const PostForm: React.FC<PostFormProps> = ({ onPostSubmit }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [errors, setErrors] = useState<{ title?: string; content?: string }>({});

  const validateForm = () => {
    const errors: { title?: string; content?: string } = {};

    if (!title.trim()) {
      errors.title = 'Post title is required.';
    }

    if (!content.trim()) {
      errors.content = 'Post content is required.';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      await submitPost();
      alert('Post submitted successfully!');
      setTitle('');
      setContent('');
      setErrors({});
    }
  };

  const submitPost = async () => {
    try {
      const postDto: PostDto = { title, content };
      const response = await createPost(postDto);
      const data = response.data;
      console.log('Post Submitted:', data);
      onPostSubmit(true);
    } catch (error) {
      console.error('Error submitting post:', error);
      alert('Error submitting post. Please try again.');
    }
  };

  return (
    <div className="post-form-container">
      <div className="card">
        <div className="card-header">Create a New Post</div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Post Title</label>
              <input
                type="text"
                className={`form-control ${errors.title ? 'is-invalid' : ''}`}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter post title"
              />
              {errors.title && <div className="invalid-feedback">{errors.title}</div>}
            </div>

            <div className="mb-3">
              <label className="form-label">Post Content</label>
              <textarea
                className={`form-control post-textarea ${errors.content ? 'is-invalid' : ''}`}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Enter post content..."
                rows={6}
              ></textarea>
              {errors.content && <div className="invalid-feedback">{errors.content}</div>}
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Submit Post
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostForm;
