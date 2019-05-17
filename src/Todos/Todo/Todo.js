import React from 'react'

import './Todo.css'
import cross from '../../assets/cross.svg'

const addDoneIfRequired = (className, isDone) => {
  return className + (isDone ? ' done' : '')
}

const todo = ({
  isDone,
  isEditing,
  onChangeTodo,
  onRemoveTodo,
  onStartEditing,
  onStopEditing,
  onToggleTodo,
  title
}) => {
  const todo = isEditing ? (
    <input
      className={addDoneIfRequired('Todo-input', isDone)}
      onBlur={onStopEditing}
      onChange={event => onChangeTodo(event)}
      placeholder="Modify Todo"
      value={title}
    />
  ) : (
    <span
      className={addDoneIfRequired('Todo-title', isDone)}
      onDoubleClick={onStartEditing}
      title={title}
    >
      {title}
    </span>
  )

  return (
    <section className="Todo-section">
      <div onClick={onToggleTodo} className={addDoneIfRequired('Todo-status', isDone)} />
      {todo}
      <img
        alt="Delete Todo"
        className="Todo-cross"
        onClick={onRemoveTodo}
        src={cross}
      />
    </section>
  )
}

export default todo
