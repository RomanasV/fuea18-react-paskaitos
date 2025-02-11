import TodoItem from "../TodoItem/TodoItem"

function TodoList(props) {
    const { todos, onDeleteTask, onDoneTask } = props

    return (
        <div className="tasks-container">
            <h2>Tasks:</h2>

            <div className="tasks-list">

                {todos.map(todo => (
                    <TodoItem key={todo.id} data={todo} onDeleteTask={onDeleteTask} onDoneTask={onDoneTask} />
                ))}
            </div>
        </div>
    )
}

export default TodoList