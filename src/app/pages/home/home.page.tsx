import DateTime from '../../components/Clock/clock';
import TodoList from '../../components/todo/todo-list/todo.list';

export default function HomePage() {

    return (
        <div className='homeRoot space-y-3'> 
            <DateTime className='section'></DateTime>
            <TodoList className='section'></TodoList>
        </div>
    )
}