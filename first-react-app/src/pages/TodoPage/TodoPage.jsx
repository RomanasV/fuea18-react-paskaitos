import { useState } from "react"
import TodoList from "../../components/TodoList/TodoList"
import TodoForm from "../../components/TodoForm/TodoForm"

import styles from './TodoPage.module.css'

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
        <div id={styles.todoPage}>
            <TodoForm onNewTask={newTaskHandler} />
            <TodoList todos={todos} onDeleteTask={deleteHandler} onDoneTask={doneHandler} />
        </div>
    )
}

export default TodoPage