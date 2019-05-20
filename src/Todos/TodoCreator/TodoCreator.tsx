import React from 'react'

import './TodoCreator.css'

type TodoCreatorProps = {
  onAddTodo: (event: React.KeyboardEvent<HTMLInputElement>) => void
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  value: string
}

const todoCreator: React.FC<TodoCreatorProps> = ({
  onAddTodo,
  onChange,
  value
}) => {
  return (
    <input
      onKeyDown={onAddTodo}
      className="TodoCreator-input"
      placeholder="Add new Todo"
      onChange={event => onChange(event)}
      value={value}
    />
  )
}

export default todoCreator
