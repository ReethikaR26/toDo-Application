import { useState } from 'react'
import './App.css'
import TodoInput from './components/todoInput'
import TodoList from './components/TodoList'

function App() {
  const [todos, settodos] = useState([])

  const addTodo = (todoItem) => {
    const newTodo={
      id: Date.now(),
      text: todoItem,
      completed: false
    }
    settodos((prevTodo) => [...prevTodo,newTodo])
  }

  const deleteTodo = (id) => {
    settodos((prevTodo) => prevTodo.filter((todo) => todo.id != id))

  }

  const toggleTodo = (id) => {
    settodos((prevTodo) => prevTodo.map((todo) => {
      if(todo.id===id) {
        return {...todo ,
          completed : !todo.completed
        }
      }
      return todo
    }))
  }

  return (
    <>
      <TodoInput addTodo={addTodo}/>
      <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
    </>
  )
}

export default App
