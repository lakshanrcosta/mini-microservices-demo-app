export interface Comment {
  id: string;
  postId: string;
  content: string;
}

export interface Comments {
  [key: string]: Comment[];
}
