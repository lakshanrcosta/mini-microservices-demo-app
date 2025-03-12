export interface Post {
  id: string;
  title: string;
  content: string;
}

export interface Posts {
  [key: string]: Post[];
}
