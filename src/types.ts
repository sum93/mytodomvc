export interface TodoType {
  isDone: boolean
  title: string
}

export interface ApplicationState {
  todos: TodoType[]
}
