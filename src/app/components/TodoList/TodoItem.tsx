import { ChangeEvent, useState } from "react";
import { TodoProps } from "../../types/Props.type";

export default function TodoItem({id, text, isCompleted}: TodoProps) {

    const [isChecked, setIsChecked] = useState(isCompleted);

    console.log(isCompleted);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        console.log('handleInputChange');
        setIsChecked(event.target.checked);
    };

    return (
        <div className='todo-item '>
            <label className="flex items-center space-x-2">
                <input checked={isChecked} onChange={handleInputChange} type="checkbox" />
                <span className="checkbox"></span>
                <p>{text}</p>
            </label>
        </div>
    )
}