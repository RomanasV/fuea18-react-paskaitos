import { useState } from "react"

function TodoPage() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const [todos, setTodos] = useState([])
    console.log(todos)

    const titleHandler = event => setTitle(event.target.value)
    const descriptionHandler = event => setDescription(event.target.value)

    const newTaskHandler = event => {
        event.preventDefault()

        const newTodo = {
            title,
            description,
            id: Math.random(),
        }

        console.log(newTodo)

        setTodos(prevState => [newTodo, ...prevState])
    }

    return (
        <div>
            <form onSubmit={newTaskHandler}>
                <input value={title} onChange={titleHandler} type="text" />
                <textarea value={description} onChange={descriptionHandler}></textarea>
                <input type="date" />

                <button type="submit">Create New Task</button> 
            </form>

            {todos.map(item => <p key={item.id}>{item.title}</p>)}
        </div>
    )
}

export default TodoPage