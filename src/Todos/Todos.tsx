import React, { Component } from 'react'

import './Todos.css'
import Todo from './Todo/Todo'
import TodoCreator from './TodoCreator/TodoCreator'

type Todo = {
  isDone: boolean,
  title: string
}

type TodosState = {
  creatorValue: string,
  editingIndex: number | null,
  todos: Todo[]
}

class Todos extends Component<{}, TodosState> {
  state: TodosState = {
    creatorValue: '',
    editingIndex: null,
    todos: []
  }

  addTodoHandler = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (event.keyCode === 13 &&
      (event.target as HTMLInputElement).value !== ''
    ) {
      const newTodos = this.state.todos.slice()
      newTodos.unshift({
        isDone: false,
        title: (event.target as HTMLInputElement).value
      })

      this.setState({
        creatorValue: '',
        todos: newTodos
      })
    }
  }
  
  removeTodo = (removeIndex: number): void => {
    this.setState({
      todos: this.state.todos.filter((_, index) => index !== removeIndex)
    })
  }
  
  removeAllDoneTodos = (): void => {
    this.setState({
      todos: this.state.todos.filter((todo) => !todo.isDone)
    })
  }
  
  toggleStatus = (toggleIndex: number): void => {
    this.setState({
      todos: this.state.todos.map((todo, index) => {
        if (index === toggleIndex) {
          return { ...todo, isDone: !todo.isDone }
        }
        return todo
      })
    })
  }

  hasCompleted = (): boolean => {
    return this.state.todos.filter(todo => todo.isDone)
      .length > 0
  }

  changeTodoCreatorInputHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ creatorValue: event.target.value })
  }

  changeTodoInputHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({
      todos: this.state.todos.map((todo, index) => {
        if (index === this.state.editingIndex) {
          return { ...todo, title: event.target.value }
        }
        return todo
      })
    })
  }

  startEditing = (index: number): void => {
    this.setState({ editingIndex: index })
  }

  stopEditing = (): void => {
    this.setState({ editingIndex: null })
  }

  render(): JSX.Element {
    const todos: JSX.Element[] = this.state.todos.map((todo, index) => {
      return (
        <Todo
          key={index}
          isDone={todo.isDone}
          isEditing={index === this.state.editingIndex}
          onChangeTodo={this.changeTodoInputHandler}
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
