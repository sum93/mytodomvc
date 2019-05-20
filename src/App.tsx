import React from 'react'

import './App.css'
import Todos from './Todos/Todos'

function App() {
  return (
    <div className="App">
      <header className="App-header">MyTodoMVC</header>
      <main className="App-main">
        <Todos />
      </main>
    </div>
  )
}

export default App
