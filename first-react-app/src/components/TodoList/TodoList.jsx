import TodoItem from "../TodoItem/TodoItem"
import styles from "./TodoList.module.css"

function TodoList(props) {
    const { todos, onDeleteTask, onDoneTask } = props

    return (
        <div className={`tasks-container ${styles.container}`}>
            <h2>Tasks:</h2>

            <div className={styles.tasksList}>

                {todos.map(todo => (
                    <TodoItem key={todo.id} data={todo} onDeleteTask={onDeleteTask} onDoneTask={onDoneTask} />
                ))}
            </div>
        </div>
    )
}

export default TodoList