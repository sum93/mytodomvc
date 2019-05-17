import React, { Component } from 'react'

import './Todos.css'
import Todo from './Todo/Todo'
import TodoCreator from './TodoCreator/TodoCreator'

class Todos extends Component {
  state = {
    creatorValue: '',
    editingIndex: null,
    todos: []
  }

  addTodoHandler = event => {
    if (event.keyCode === 13 && event.target.value !== '') {
      const newTodos = this.state.todos.slice()
      newTodos.unshift({ isDone: false, title: event.target.value })

      this.setState({
        creatorValue: '',
        todos: newTodos
      })
    }
  }
  
  removeTodo = removeIndex => {
    this.setState({
      todos: this.state.todos.filter((_, index) => index !== removeIndex)
    })
  }
  
  removeAllDoneTodos = () => {
    this.setState({
      todos: this.state.todos.filter((todo) => !todo.isDone)
    })
  }
  
  toggleStatus = toggleIndex => {
    this.setState({
      todos: this.state.todos.map((todo, index) => {
        if (index === toggleIndex) {
          return { ...todo, isDone: !todo.isDone }
        }
        return todo
      })
    })
  }

  hasCompleted = () => {
    return this.state.todos.filter(todo => todo.isDone)
      .length > 0
  }

  changeTodoCreatorInputHandler = event => {
    this.setState({ creatorValue: event.target.value })
  }

  changeTodoInputHandler = event => {
    this.setState({
      todos: this.state.todos.map((todo, index) => {
        if (index === this.state.editingIndex) {
          return { ...todo, title: event.target.value }
        }
        return todo
      })
    })
  }

  startEditing = index => {
    this.setState({ editingIndex: index })
  }

  stopEditing = () => {
    this.setState({ editingIndex: null })
  }

  render() {
    const todos = this.state.todos.map((todo, index) => {
      return (
        <Todo
          key={index}
          isDone={todo.isDone}
          onChangeTodo={this.changeTodoInputHandler}
          isEditing={index === this.state.editingIndex}
          onRemoveTodo={() => this.removeTodo(index)}
          onStartEditing={() => this.startEditing(index)}
          onStopEditing={this.stopEditing}
          onToggleTodo={() => this.toggleStatus(index)}
          title={todo.title}
        />
      )
    })

    return (
      <article className="Todos-article">
        <TodoCreator
          onAddTodo={this.addTodoHandler}
          onChange={this.changeTodoCreatorInputHandler}
          value={this.state.creatorValue}
        />
        {todos}
        {this.hasCompleted() ? <span
          className="Todos-removeAll"
          onClick={this.removeAllDoneTodos}
        >
          Delete all done
        </span> : null}
      </article>
    )
  }
}

export default Todos
