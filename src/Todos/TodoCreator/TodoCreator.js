import React from 'react'

import './TodoCreator.css'

const todoCreator = ({ onAddTodo, onChange, value }) => {
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
