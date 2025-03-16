import { Comment } from './comments';

export interface Post {
  id: string;
  title: string;
  comments: Comment[];
}
export interface Posts {
  [key: string]: Post;
}

export interface PostCreatedEventDto {
  type: 'PostCreated';
  data: {
    id: string;
    title: string;
    content: string;
  };
}
