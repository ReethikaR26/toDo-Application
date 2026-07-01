import './Todo.css';
import { FaTrashAlt } from 'react-icons/fa'; 
import { BiTrash } from 'react-icons/bi';
function TodoList({todos,totalTodos, filter,deleteTodo,toggleTodo}){

    if (todos.length === 0) {

        if(totalTodos.length===0)
            return (
                <div className="empty-state">
                    <div className="empty-icon">🎯</div>
                    <h3>No todos yet!</h3>
                    <p>Add your first todo above to get started.</p>
                </div>
            );
        if(filter === "completed"){
            return (
            <div className="empty-state">
                <div className="empty-icon"></div>
                <h3>No completed tasks!</h3>
                <p>
                    Finish some tasks and they'll show up here.
                </p>
            </div>
        );
        }
         if (filter === "active") {
        return (
            <div className="empty-state">
                <div className="empty-icon">🎉</div>
                <h3>Everything completed!</h3>
                <p>
                    Nice work — no active tasks remaining.
                </p>
            </div>
        );
    }
  }
    return(
        <> 
        
        <div className="todo-list-container">
            
                
                <ul className="todo-list">
                    {
                        todos.map((todo) => (
                            <li className={`todo-item ${todo.completed ? "completed" : ""}`} key={todo.id} >
                                
                                <label className="todo-checkbox-lofi">
                                <input
                                    type="checkbox"
                                    checked={todo.completed}
                                    onChange={() => toggleTodo(todo.id)}
                                />
                                <span className="checkmark"></span>
                               </label>
                                <span className={`todo-text ${todo.completed ? "completed-text" : ""}`}>{todo.text}</span>
                                <button onClick={(e) => { e.stopPropagation();
                                    deleteTodo(todo.id);}} className='delete-button' aria-label="Delete Button"><BiTrash/></button>
                            </li>))

                    }
                    </ul>
            </div>
        
        <div className="page-footer">
                    <span>{todos.filter(t => t.completed).length} / {todos.length} done</span>
                    <span>☕</span>
                </div>
        </>
    )
}

export default TodoList