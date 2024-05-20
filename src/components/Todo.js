import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { EditTodoForm } from './EditTodoForm'

export const Todo = ({task, toggleComplete, deleteTodo, editTodo}) => {
    return (
        <div className='Todo'>
            <h1 onClick={() => toggleComplete(task.id)} className={`${task.completed? 'completed': ""}`}>{task.task}</h1>
            <div>
                <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(task.id)} />
                <EditTodoForm task={task} editTodo={editTodo} />
                <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} />
                
            </div>
        </div>
    )
}