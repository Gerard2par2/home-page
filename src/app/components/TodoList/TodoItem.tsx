import { TodoProps } from "../../types/Props.type";

export default function TodoItem({id, text}: TodoProps) {
    return (
        <div className='todo-item flex space-x-2'>
            <p>{text}</p>
            <input type='checkbox'></input>
        </div>
    )
}