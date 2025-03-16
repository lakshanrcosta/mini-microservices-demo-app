export interface Comment {
  id: string;
  postId: string;
  content: string;
}

export interface CommentCreatedEventDto {
  type: 'CommentCreated';
  data: {
    id: string;
    postId: string;
    content: string;
  };
}
