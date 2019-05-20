export const ADD_TODO = 'ADD_TODO'
export const CHANGE_TODO = 'CHANGE_TODO'
export const REMOVE_ALL_DONE_TODOS = 'REMOVE_ALL_DONE_TODOS'
export const REMOVE_TODO = 'REMOVE_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'

export interface AddTodoAction {
  type: typeof ADD_TODO
  payload: { title: string }
}

export interface ChangeTodoAction {
  type: typeof CHANGE_TODO
  payload: {
    index: number
    title: string
  }
}

export interface RemoveAllDoneTodosAction {
  type: typeof REMOVE_ALL_DONE_TODOS
}

export interface RemoveTodoAction {
  type: typeof REMOVE_TODO
  payload: { index: number }
}

export interface ToggleTodoAction {
  type: typeof TOGGLE_TODO
  payload: { index: number }
}

export type ActionType =
  | AddTodoAction
  | ChangeTodoAction
  | RemoveAllDoneTodosAction
  | RemoveTodoAction
  | ToggleTodoAction
