import { useState } from "react"

function TodoForm(props) {
    const { onNewTask } = props
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const titleHandler = event => setTitle(event.target.value)
    const descriptionHandler = event => setDescription(event.target.value)

    const submitHandler = event => {
        event.preventDefault()

        const newTodo = {
            title,
            description,
            id: Math.random(),
            isDone: false
        }

        onNewTask(newTodo)
    }

    return (
        <form onSubmit={submitHandler} >
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
    )
}

export default TodoForm