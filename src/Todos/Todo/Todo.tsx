import React from 'react'

import './Todo.css'
import cross from '../../assets/cross.svg'

const addDoneIfRequired = (className: string, isDone: boolean): string => {
  return className + (isDone ? ' done' : '')
}

type TodoProps = {
  isDone: boolean,
  isEditing: boolean,
  onChangeTodo: (event: React.ChangeEvent<HTMLInputElement>) => void,
  onRemoveTodo: () => void,
  onStartEditing: () => void,
  onStopEditing: () => void,
  onToggleTodo: (event: React.MouseEvent) => void,
  title: string
}

const todo: React.FC<TodoProps> = ({
  isDone,
  isEditing,
  onChangeTodo,
  onRemoveTodo,
  onStartEditing,
  onStopEditing,
  onToggleTodo,
  title
}) => {
  const todoContent: JSX.Element = isEditing ? (
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
      {todoContent}
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
