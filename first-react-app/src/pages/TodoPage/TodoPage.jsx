import { useState } from "react"
import './TodoPage.css'
import TodoList from "../../components/TodoList/TodoList"
import TodoForm from "../../components/TodoForm/TodoForm"

const initialTodos = [
    {
        title: 'Vienas',
        description: 'Aprasymas',
        id: Math.random(),
        isDone: false
    },
    {
        title: 'Du',
        description: 'Aprasymas 2',
        id: Math.random(),
        isDone: true
    },
]

function TodoPage() {
    const [todos, setTodos] = useState(initialTodos)

    const newTaskHandler = newTodo => {
        setTodos(prevState => [newTodo, ...prevState])
    }

    const deleteHandler = id => {
        setTodos(prevState => prevState.filter(todo => todo.id !== id))
    }

    const doneHandler = id => {
        setTodos(prevState => {
            const updatedState = prevState.map(todo => {
                if (id === todo.id) {
                    const updatedTodo = { ...todo, isDone: !todo.isDone }
                    return updatedTodo
                }

                return todo
            })

            return updatedState
        })
    }

    return (
        <div id="todo-page">
            <TodoForm onNewTask={newTaskHandler} />
            <TodoList todos={todos} onDeleteTask={deleteHandler} onDoneTask={doneHandler} />
        </div>
    )
}

export default TodoPage