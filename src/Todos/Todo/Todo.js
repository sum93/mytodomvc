import React from 'react'

import './Todo.css'
import cross from '../../assets/cross.svg'

const addDone = (className, isDone) => {
  return className + (isDone ? ' done' : '')
}

const todo = ({
  isDone,
  isEditing,
  onRemoveTodo,
  onStartEditing,
  onStopEditing,
  onToggleTodo,
  title
}) => {
  return (
    <section className="Todo-section">
      <div onClick={onToggleTodo} className={addDone('Todo-status', isDone)} />
      <span
        className={addDone('Todo-title', isDone)}
        onDoubleClick={onStartEditing}
        title={title}
      >
        {title}
      </span>
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
