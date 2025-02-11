import { useState } from "react"
import './TodoPage.css'

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
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const [todos, setTodos] = useState(initialTodos)

    const titleHandler = event => setTitle(event.target.value)
    const descriptionHandler = event => setDescription(event.target.value)

    const newTaskHandler = event => {
        event.preventDefault()

        const newTodo = {
            title,
            description,
            id: Math.random(),
            isDone: false
        }

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
            <form onSubmit={newTaskHandler}>
                <div>
                    <label htmlFor="task">Task:</label>
                    <input value={title} onChange={titleHandler} type="text" id="task" />
                </div>

                <div>
                    <label htmlFor="description">Description</label>
                    <textarea value={description} onChange={descriptionHandler} id="description"></textarea>
                </div>

                {/* <div>
                    <label htmlFor="due-date">Due Date:</label>
                    <input type="date" id="due-date" />
                </div> */}

                <button type="submit">Create New Task</button> 
            </form>


            <div className="tasks-container">
                <h2>Tasks:</h2>

                <div className="tasks-list">

                    {todos.map(todo => {
                        console.log(todo.id)
                        console.log(todo.isDone)

                        return (
                            <div key={todo.id} className={`task-item ${todo.isDone ? ' done' : ''}`}>
                                <span>{todo.id}</span>
                                <h3 className="task-title">{todo.title}</h3>
                                <p className="task-description">{todo.description}</p>
                                <p>Task status: {todo.isDone ? 'Done' : 'Not Done'}</p>

                                <button onClick={() => doneHandler(todo.id)}>{todo.isDone ? 'Undo' : 'Done'}</button>
                                <button onClick={() => deleteHandler(todo.id)}>Delete</button>
                            </div>
                        )
                    })}


                </div>
            </div>



        </div>
    )
}

export default TodoPage