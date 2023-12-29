interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type E = Pick<Todo, "title" | "completed">;
//   ^?

type F = Omit<Todo, "description">;
//   ^?
