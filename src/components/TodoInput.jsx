import { useState } from "react"


function TodoInput({addTodo}) {

    const [tempItem ,settempItem] = useState("")

    return(
        <>
            <input value={tempItem} onChange={(e) => settempItem(e.target.value)} placeholder="Enter new to-do item"/>
            <button onClick={() => addTodo(tempItem)}>Add</button>
        </>
        
    )
    
}

export default TodoInput