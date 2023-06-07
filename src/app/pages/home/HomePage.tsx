import DateTime from '../../components/Clock/DateTime';
import TodoList from '../../components/TodoList/TodoList';

export default function HomePage() {

    return (
        <div className='homeRoot space-y-3'> 
            <DateTime className='section'></DateTime>
            <TodoList className='section'></TodoList>
        </div>
    )
}