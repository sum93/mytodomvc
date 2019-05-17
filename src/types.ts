export interface Todo {
  isDone: boolean
  title: string
}

export interface ApplicationState {
  todos: Todo[]
}
