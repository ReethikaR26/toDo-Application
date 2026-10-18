import { useState } from "react"
import './Todo.css';

function TodoInput({addTodo}) {

    const [tempItem ,settempItem] = useState("")

    const handleAdd = () => {
        const trimmed= tempItem.trim()
        if (!trimmed) return;
        addTodo(trimmed);
        settempItem("");
    }

    return(
        <>
        <section className="todo-input-container">
            <input className='todo-input'
             value={tempItem} 
             onChange={(e) => settempItem(e.target.value)} 
             placeholder="Enter new to-do item"
             onKeyDown={(e) => {
                if(e.key === "Enter") handleAdd();
             }}/>
            <button onClick={() => handleAdd()} className="add-button">Add</button>
        </section>
        </>
        
    )
    
}

export default TodoInput
