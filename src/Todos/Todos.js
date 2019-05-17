import React, { Component } from 'react'
import { connect } from 'react-redux'

import './Todos.css'
import * as Actions from '../store/actions' 
import Todo from './Todo/Todo'
import TodoCreator from './TodoCreator/TodoCreator'
import { hasCompletedTodos } from '../store/reducer'

class Todos extends Component {
  state = {
    creatorValue: '',
    editingIndex: null,
    editingValue: '',
    todos: []
  }

  addTodoHandler = event => {
    if (event.keyCode === 13 && event.target.value !== '') {
      this.props.addTodo(event.target.value)
      this.setState({
        creatorValue: ''
      })
    }
  }

  changeTodoCreatorInputHandler = event => {
    this.setState({ creatorValue: event.target.value })
  }

  changeTodoInputHandler = event => {
    this.setState({ editingValue: event.target.value })
  }

  startEditing = index => {
    this.setState({
      editingIndex: index,
      editingValue: this.props.todos[index].title
    })
  }

  stopEditing = () => {
    this.props.changeTodo(this.state.editingIndex, this.state.editingValue)
    this.setState({
      editingIndex: null,
      editingValue: ''
    })
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
        {this.props.hasCompletedTodos ? <span
          className="Todos-removeAll"
          onClick={this.props.removeAllDoneTodos}
        >
          Delete all done
        </span> : null}
      </article>
    )
  }
}

const mapStateToProps = store => ({
  hasCompletedTodos: hasCompletedTodos(store),
  todos: store.todos
})

const mapDispatchToProps = dispatch => ({
  addTodo: title => dispatch(Actions.addTodo(title)),
  changeTodo: (index, title) => dispatch(Actions.changeTodo(index, title)),
  removeTodo: index => dispatch(Actions.removeTodo(index)),
  removeAllDoneTodos: () => dispatch(Actions.removeAllDoneTodo()),
  toggleTodo: index => dispatch(Actions.toggleTodo(index))
})

export default connect(mapStateToProps, mapDispatchToProps)(Todos)
