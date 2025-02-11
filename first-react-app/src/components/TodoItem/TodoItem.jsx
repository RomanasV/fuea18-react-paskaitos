import styles from './TodoItem.module.css'

function TodoItem(props) {
    const { onDeleteTask, onDoneTask } = props
    const { id, isDone, title, description } = props.data

    return (
        <div className={`${styles.taskItem} ${isDone ? styles.done : ''}`}>
            <span>{id}</span>
            <h3 className={styles.taskTitle}>{title}</h3>
            <p className={styles.taskDescription}>{description}</p>
            <p>Task status: {isDone ? 'Done' : 'Not Done'}</p>

            <button onClick={() => onDoneTask(id)}>{isDone ? 'Undo' : 'Done'}</button>
            <button onClick={() => onDeleteTask(id)}>Delete</button>
        </div>
    )
}

export default TodoItem