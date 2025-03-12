import React, { useEffect, useState } from 'react';
import { getComments } from '../../api/comments-service/api-comments';
import { Comments } from '../../types/comment-types/comment-types';

interface CommentListProps {
  postId: string;
  onNewComment: boolean;
}

const CommentList: React.FC<CommentListProps> = ({ postId, onNewComment }) => {
  const [comments, setComments] = useState<Comments>({});

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await getComments(postId);
        setComments(response.data);
      } catch (error) {
        console.error('Failed to load comments:', error);
      }
    };

    fetchComments();
  }, [postId, onNewComment]);

  return (
    <div className="comment-list">
      {Object.values(comments).flat().length === 0 ? (
        <p className="text-muted">No comments yet.</p>
      ) : (
        Object.values(comments)
          .flat()
          .map((comment) => (
            <div key={comment.id} className="comment">
              <p>{comment.content}</p>
            </div>
          ))
      )}
    </div>
  );
};

export default CommentList;
