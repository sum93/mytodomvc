import React, { Component } from 'react'
import { connect } from 'react-redux'

import './Todos.css'
import * as Actions from '../store/actions'
import Todo from './Todo/Todo'
import TodoCreator from './TodoCreator/TodoCreator'
import { hasCompletedTodos } from '../store/reducer'

import { ActionType } from '../store/actionTypes'
import { ApplicationState, TodoType } from '../types'

interface TodosState {
  creatorValue: string
  editingIndex: number | null
  editingValue: string
}

interface StateProps {
  hasCompletedTodos: boolean
  todos: TodoType[]
}

interface DispatchProps {
  addTodo: (title: string) => void
  changeTodo: (index: number, title: string) => void
  removeTodo: (index: number) => void
  removeAllDoneTodos: () => void
  toggleTodo: (index: number) => void
}

type TodosProps = StateProps & DispatchProps

class Todos extends Component<TodosProps, TodosState> {
  state: TodosState = {
    creatorValue: '',
    editingIndex: null,
    editingValue: ''
  }

  addTodoHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      event.keyCode === 13 &&
      (event.target as HTMLInputElement).value !== ''
    ) {
      this.props.addTodo((event.target as HTMLInputElement).value)
      this.setState({
        creatorValue: ''
      })
    }
  }

  changeTodoCreatorInputHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    this.setState({ creatorValue: event.target.value })
  }

  changeTodoInputHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    this.setState({ editingValue: event.target.value })
  }

  startEditing = (index: number): void => {
    this.setState({
      editingIndex: index,
      editingValue: this.props.todos[index].title
    })
  }

  stopEditing = (): void => {
    if (this.state.editingIndex) {
      this.props.changeTodo(this.state.editingIndex, this.state.editingValue)
      this.setState({
        editingIndex: null,
        editingValue: ''
      })
    }
  }

  render() {
    const todos = this.props.todos.map((todo, index) => {
      const isEditing = index === this.state.editingIndex
      return (
        <Todo
          key={index}
          isDone={todo.isDone}
          onChangeTodo={this.changeTodoInputHandler}
          isEditing={isEditing}
          onRemoveTodo={() => this.props.removeTodo(index)}
          onStartEditing={() => this.startEditing(index)}
          onStopEditing={this.stopEditing}
          onToggleTodo={() => this.props.toggleTodo(index)}
          title={isEditing ? this.state.editingValue : todo.title}
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
        {this.props.hasCompletedTodos ? (
          <span
            className="Todos-removeAll"
            onClick={this.props.removeAllDoneTodos}
          >
            Delete all done
          </span>
        ) : null}
      </article>
    )
  }
}

const mapStateToProps = (state: ApplicationState): StateProps => ({
  hasCompletedTodos: hasCompletedTodos(state),
  todos: state.todos
})

const mapDispatchToProps = (
  dispatch: React.Dispatch<ActionType>
): DispatchProps => ({
  addTodo: title => dispatch(Actions.addTodo(title)),
  changeTodo: (index, title) => dispatch(Actions.changeTodo(index, title)),
  removeTodo: index => dispatch(Actions.removeTodo(index)),
  removeAllDoneTodos: () => dispatch(Actions.removeAllDoneTodos()),
  toggleTodo: index => dispatch(Actions.toggleTodo(index))
})

export default connect<StateProps, DispatchProps, {}, ApplicationState>(
  mapStateToProps,
  mapDispatchToProps
)(Todos)
