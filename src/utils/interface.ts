export interface todo {
  id: number;
  tag: string;
  description: string;
  resource?: string;
  video?: string;
}

export interface todoProp {
  todos: todo;
}

export interface clientTodo {
  post_id: number;
  post_description: string;
  post_tag: string;
  post_resource?: null | string;
  post_video?: null | string;
}

export interface clientTodoProp {
  clientTodo: clientTodo;
  getPosts : ()=>Promise<void>
}
// interface for the database information
