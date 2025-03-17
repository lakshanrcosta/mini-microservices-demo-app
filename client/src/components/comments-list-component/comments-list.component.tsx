import { Comment } from '../../types/comment-types/comment-types';

interface CommentListProps {
  comments: Comment[];
}

const CommentList: React.FC<CommentListProps> = ({ comments }) => {
  return (
    <div className="comment-list">
      {comments.length === 0 ? (
        <p className="text-muted">No comments yet.</p>
      ) : (
        comments.map((comment) => (
          <div key={comment.id} className="comment">
            <p>{comment.content}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default CommentList;
