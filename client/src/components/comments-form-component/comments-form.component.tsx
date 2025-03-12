import React, { useState } from 'react';
import { CommentDto } from '../../types/comment-types/comment-dto-types';
import { createComment } from '../../api/comments-service/api-comments';
import './comments-form.component.css';

interface CommentFormProps {
  postId: string;
  onCommentSubmit: (isNewComment: boolean) => void;
}

const CommentForm: React.FC<CommentFormProps> = ({ postId, onCommentSubmit }) => {
  const [comment, setComment] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!comment.trim()) return;

    try {
      await submitComment();
      alert('Comment submitted successfully!');
      setComment('');
    } catch (error) {
      console.error('Failed to add comment:', error);
    }
  };

  const submitComment = async () => {
    try {
      const commentDto: CommentDto = { content: comment };
      const response = await createComment(postId, commentDto);
      const data = response.data;
      onCommentSubmit(true);
      console.log('Post Submitted:', data);
    } catch (error) {
      console.error('Error submitting comment:', error);
      alert('Error submitting comment. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="comment-form">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Write a comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button className="btn btn-primary" type="submit">
          Comment
        </button>
      </div>
    </form>
  );
};

export default CommentForm;
