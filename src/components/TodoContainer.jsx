import AddTodoForm from "./AddTodoForm"
import TodoList from "./TodoList"
import { useState } from "react"

function TodoContainer()
{
    const [activityarr,setactivityarr]=useState([
       
    ])
    return(
      
          <div className="flex flex-wrap gap-5">
            
           <AddTodoForm activityarr={activityarr} setactivityarr={setactivityarr}></AddTodoForm>
          <TodoList activityarr={activityarr} setactivityarr={setactivityarr}></TodoList>
          </div>

      
    )
}
export default TodoContainer