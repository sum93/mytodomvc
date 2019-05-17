import * as actionTypes from './actionTypes'

const initialStore = {
  todos: []
}

const addTodo = (store, action) => {
  const newTodos = store.todos.slice()
  newTodos.unshift({ isDone: false, title: action.payload.title })

  return { ...store, todos: newTodos }
}

const changeTodo = (store, action) => {
  const newTodos = store.todos.map((todo, index) => {
    if (index === action.payload.index) {
      return { ...todo, title: action.payload.title }
    }
    return todo
  })

  return { ...store, todos: newTodos }
}
  
const removeAllDoneTodos = store => ({
  ...store,
  todos: store.todos.filter(todo => !todo.isDone)
})

const removeTodo = (store, action) => ({
  ...store,
  todos: store.todos.filter((_, index) => index !== action.payload.index)
})

const toggleTodo = (store, action) => {
  const newTodos = store.todos.map((todo, index) => {
    if (index === action.payload.index) {
      return { ...todo, isDone: !todo.isDone }
    }
    return todo
  })

  return {
    ...store,
    todos: newTodos
  }
}

const reducer = (store = initialStore, action) => {
  switch(action.type) {
    case actionTypes.ADD_TODO:
      return addTodo(store, action)
    case actionTypes.CHANGE_TODO:
      return changeTodo(store, action)
    case actionTypes.REMOVE_ALL_DONE_TODOS:
      return removeAllDoneTodos(store)
    case actionTypes.REMOVE_TODO:
      return removeTodo(store, action)
    case actionTypes.TOGGLE_TODO:
      return toggleTodo(store, action)

    default:
      return store
  }
}

export const hasCompletedTodos = store => {
  return store.todos.filter(todo => todo.isDone).length > 0
}

export default reducer
