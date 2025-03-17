import { Comment } from '../comment-types/comment-types';

export interface PostComments {
  id: string;
  title: string;
  content: string;
  comments: Comment[];
}

export interface Posts {
  [key: string]: PostComments[];
}
