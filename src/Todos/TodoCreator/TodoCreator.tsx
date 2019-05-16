import React from 'react'

import './TodoCreator.css'

type TodoCreatorProps = {
  onAddTodo: (event: React.KeyboardEvent<HTMLInputElement>) => void,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  value: string
}

const todoCreator = ({ onAddTodo, onChange, value }: TodoCreatorProps) => {
  return (
    <input
      onKeyDown={onAddTodo}
      className="TodoCreator-input"
      placeholder="Add new Todo"
      onChange={onChange}
      value={value}
    />
  )
}

export default todoCreator
