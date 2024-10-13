import { queryClient } from "../App"
import { randomNum } from "./tables"

export const todoData: any = [
    {
        "id": "001",
        "text": `Item: 001`,
        "isCompleted": false
    }
]

export async function getAllTodos() {
    return todoData
}

export function addTodo(callback) {
    todoData.push({
        "id": randomNum(100),
        "text": `Item: ${randomNum(100)}`,
        "isCompleted": false
    })
    callback()
    // queryClient.invalidateQueries({
    //     "queryKey": ["allTodos"]
    // })
    return true
}

export function toggleTodo(id,callback) {
    const todoIndex: any = todoData.findIndex((item) => item.id === id)
    todoData[todoIndex].isCompleted = !todoData[todoIndex].isCompleted
    callback()
}

