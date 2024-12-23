import { useState } from "react"
import { Link } from "react-router-dom"

function AddTodoForm(props) {
    const activityarr = props.activityarr
    const setactivityarr = props.setactivityarr
    const [newactivity,setnewactvity]=useState("")
    function handleChange(evt){
         setnewactvity(evt.target.value)
    }
    function addactivity()
    {
         setactivityarr([...activityarr,{id:activityarr.length+1,activity:newactivity}])
         setnewactvity("")
    }
    return (
        <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-medium">Manage Activity</h1>
           <div>
           <input value={newactivity} onChange={handleChange} placeholder="Next Activity ?" className=" p-1  border border-black my-2"></input>
           <button onClick={addactivity} className="bg-black text-white p-1 border border-black">Add</button>
           <Link to={'/login'} className="flex flex-row bg-[#8272DA] w-24 p-1 border rounded-md ">👉 Login</Link>
           </div>
           </div>
    )
}
export default AddTodoForm 