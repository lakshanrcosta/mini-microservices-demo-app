export interface PostCreatedEventDto {
  type: 'PostCreated';
  data: {
    id: string;
    title: string;
    content: string;
  };
}
