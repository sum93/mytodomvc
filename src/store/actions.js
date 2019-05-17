import * as actionTypes from './actionTypes'

export const addTodo = title => ({
  type: actionTypes.ADD_TODO,
  payload: { title: title }
})

export const changeTodo = (index, title) => ({
  type: actionTypes.CHANGE_TODO,
  payload: {
    index: index,
    title: title
  }
})

export const removeAllDoneTodo = () => ({
  type: actionTypes.REMOVE_ALL_DONE_TODOS
})

export const removeTodo = index => ({
  type: actionTypes.REMOVE_TODO,
  payload: { index: index }
})

export const toggleTodo = index => ({
  type: actionTypes.TOGGLE_TODO,
  payload: { index: index }
})
