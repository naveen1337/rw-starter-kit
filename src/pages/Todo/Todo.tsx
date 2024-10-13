import React from "react"

function Todo(props: any) {
    return (
        <div className="mx-2 inline-block">
            <span className={
                props.isCompleted ? 'line-through' : ''
            }>{props.text}</span>

            <button className="mx-2 bg-gray-200 px-2" onClick={()=>props.toggle(props.id)}>Toggle</button>
        </div>
    )
}

export default Todo
// export default React.memo(Todo,(prev,next)=>{
//     return prev.id === next.id
// })