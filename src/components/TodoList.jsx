import TodoItem from "./TodoItem"

function TodoList(props) {
    const activityarr = props.activityarr
    const setactivityarr = props.setactivityarr
    return (
        <div className="bg-[#BDB4EA] border rounded-md p-3 flex-grow gap-2 mx-3 ">
            <h1 className="text-2xl">Today's Activity</h1>
            {activityarr.length === 0 ? <p>you haven't added anything yet</p> : ""}
            {activityarr.map(function (item, index) {
                return <TodoItem id={item.id} index={index} activity={item.activity} activityarr={activityarr} setactivityarr={setactivityarr}></TodoItem>
            })}
        </div>
    )
}
export default TodoList