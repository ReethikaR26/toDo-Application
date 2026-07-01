import TodoInput from '../components/TodoInput'
import TodoList from '../components/TodoList'
import { useEffect, useState } from 'react'
import './TodoPage.css'
import '../components/Todo.css'

function TodoPage(){
    const [todos, settodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  })
    const [filter, setFilter] = useState("all");

  const addTodo = (todoItem) => {
    const newTodo={
      id: Date.now(),
      text: todoItem,
      completed: false
    }
    settodos((prevTodo) => [...prevTodo,newTodo])
  }

  const deleteTodo = (id) => {
    settodos((prevTodo) => prevTodo.filter((todo) => todo.id !== id))

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

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])

  const filteredTodos  = todos.filter((todo) => {
    if ( filter === "active") return !todo.completed;
    if ( filter === "completed") return todo.completed;
    return true;
  })

  const remainingTasks = todos.filter(todo => !todo.completed).length;
  return (
    <>
    <div className="notebook-page">
      <div className="page-header">
                    <h1> ✏️ Today's tasks</h1>
                    <span className="page-date">{new Date().toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        month: 'long', 
                        day: 'numeric' 
                    })}</span>
                </div>
      <TodoInput addTodo={addTodo}/>
      <div className='todo-controls'>
        <p className="task-counter">
            {remainingTasks} task
            {remainingTasks !== 1 ? "s" : ""}
            {" "}remaining
        </p>
        <div className='filter-buttons'>
            <button onClick={() => setFilter("all")}>All</button>
            <button onClick={() => setFilter("active")}>Active</button>
            <button onClick={() => setFilter("completed")}>Completed</button>
        </div>
      </div>
      <TodoList todos={filteredTodos} totalTodos={todos} filter={filter} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
      </div>
    </>
  )
}

export default TodoPage