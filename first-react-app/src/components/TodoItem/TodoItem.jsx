function TodoItem(props) {
    const { onDeleteTask, onDoneTask } = props
    const { id, isDone, title, description } = props.data

    return (
        <div className={`task-item ${isDone ? ' done' : ''}`}>
            <span>{id}</span>
            <h3 className="task-title">{title}</h3>
            <p className="task-description">{description}</p>
            <p>Task status: {isDone ? 'Done' : 'Not Done'}</p>

            <button onClick={() => onDoneTask(id)}>{isDone ? 'Undo' : 'Done'}</button>
            <button onClick={() => onDeleteTask(id)}>Delete</button>
        </div>
    )
}

export default TodoItem