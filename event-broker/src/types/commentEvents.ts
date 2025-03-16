export interface CommentCreatedEvent {
  type: string;
  data: {
    id: string;
    postId: string;
    content: string;
  };
}
