import React, {useState} from 'react'

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        
        addTodo(value);

        setValue("")
    }
    return (
        <div>
            <form className='TodoForm' onSubmit={handleSubmit}>
                <input type='text' className='todo-input' value={value} placeholder='Apa masukkan hari ini?' onChange={(e) => setValue(e.target.value)} />
                <button className='todo-btn' type='submit'>Tambahkan</button>
            </form>
        </div>
    );
}