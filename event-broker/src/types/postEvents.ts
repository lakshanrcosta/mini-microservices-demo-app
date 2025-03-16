export interface PostCreatedEvent {
  type: string;
  data: {
    id: string;
    title: string;
    content: string;
  };
}
