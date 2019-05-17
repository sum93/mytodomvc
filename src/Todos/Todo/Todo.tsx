import React from 'react'

import './Todo.css'
import cross from '../../assets/cross.svg'

const addDoneIfRequired: (className: string, isDone: boolean) => string =
  (className, isDone) => className + (isDone ? ' done' : '')

type TodoProps = {
  isDone: boolean,
  isEditing: boolean,
  onRemoveTodo: () => void,
  onStartEditing: (event: React.MouseEvent) => void,
  onStopEditing: (event: React.MouseEvent) => void,
  onToggleTodo: (event: React.MouseEvent) => void,
  title: string
}

const todo: React.FC<TodoProps> = ({
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
      <div
        className={addDoneIfRequired('Todo-status', isDone)}
        onClick={onToggleTodo}
      />
      <span
        className={addDoneIfRequired('Todo-title', isDone)}
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
