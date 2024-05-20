import React, {useState} from 'react'

export const EditTodoForm = ({editTodo}) => {
    const [value, setValue] = useState(task.task);
    const handleSubmit = (e) => {
        e.preventDefault();
        
        editTodo(value, task.id);

        setValue("")
    }
    return (
        <div>
            <form className='TodoForm' onSubmit={handleSubmit}>
                <input type='text' className='todo-input' value={value} placeholder='Silakan Edit' onChange={(e) => setValue(e.target.value)} />
                <button className='todo-btn' type='submit'>Edit</button>
            </form>
        </div>
    );
}