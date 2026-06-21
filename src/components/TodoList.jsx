
function TodoList({todos,deleteTodo,toggleTodo}){


    return(
        <> <ul>
            {
                todos.map((todo) => (
                    <li key={todo.id} onClick={()=>toggleTodo(todo.id)}  style={{textDecoration: todo.completed ? "line-through" : "none"}}>
                        {todo.text}
                        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                    </li>))

            }
            </ul>
        </>
    )
}

export default TodoList