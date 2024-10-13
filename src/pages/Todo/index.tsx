import { useQuery, useQueryClient } from "react-query"
import Todo from "./Todo"
import { addTodo, getAllTodos, toggleTodo } from "../../state/todo"

function AddTodo() {
    const queryClient = useQueryClient()
    const todos = useQuery(["allTodos"], getAllTodos)

    function toggle(id: any) {
        toggleTodo(id, () => {
            queryClient.invalidateQueries(["allTodos"])
        })
    }

    function addTodoItem() {
        addTodo(() => {
            queryClient.invalidateQueries(["allTodos"])
        })
    }

    return (
        <div>
            <h1>Todo</h1>
            <div>
                <button onClick={addTodoItem}>
                    Add todo
                </button>
            </div>
            {
                todos.data && todos.data.map((item: any) => {
                    return (
                        <Todo
                            key={item.id}
                            id={item.id}
                            text={item.text}
                            toggle={() => toggle(item.id)}
                            isCompleted={item.isCompleted} />
                    )
                })
            }

        </div>
    )
}

export default AddTodo