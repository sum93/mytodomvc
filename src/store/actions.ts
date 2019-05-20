import * as actionTypes from './actionTypes'

export const addTodo = (title: string): actionTypes.AddTodoAction => ({
  type: actionTypes.ADD_TODO,
  payload: { title: title }
})

export const changeTodo = (index: number, title: string): actionTypes.ChangeTodoAction => ({
  type: actionTypes.CHANGE_TODO,
  payload: {
    index: index,
    title: title
  }
})

export const removeAllDoneTodos = (): actionTypes.RemoveAllDoneTodosAction => ({
  type: actionTypes.REMOVE_ALL_DONE_TODOS
})

export const removeTodo = (index: number): actionTypes.RemoveTodoAction => ({
  type: actionTypes.REMOVE_TODO,
  payload: { index: index }
})

export const toggleTodo = (index: number): actionTypes.ToggleTodoAction => ({
  type: actionTypes.TOGGLE_TODO,
  payload: { index: index }
})
