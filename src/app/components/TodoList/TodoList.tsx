'use client'
import PocketBase from 'pocketbase';
import { FormEvent, useEffect, useState } from "react";
import { TodoItemType } from "../../types/Data.type";
import TodoItem from "./TodoItem";
import { TodoListProps } from "../../types/Props.type";
import AddIcon from 'src/assets/svg/add.icon.svg';
import Image from 'next/image';


export default function TodoList({className}: TodoListProps) {


    const [todoList, setTodoList] = useState<TodoItemType[]>([]);
    const [newTodoItemText, setNextToDoText] = useState<string>('');

    


    function addTodoItem(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log(e);
    }

    useEffect(()=>{
        const pb = new PocketBase('https://home-page.pockethost.io') as PocketBase;
        
        const fetchToDoItems = async () => {
            
            const todoItems = await pb.collection('todoItems').getList();

            console.log(todoItems);
        };

        fetchToDoItems();
    }, []);

    return todoList.length > 0 ? (
        <div className={className+' p-2'}>
        { todoList.map((todoItem, key) => {
            return <TodoItem key={key} {...todoItem}></TodoItem>
        })}
        </div>
    ) : (
        <div className={className+' p-2'}>
            <div className='m-0'>
                <p className='text-[rgba(255,255,255,0.65)] w-fit'>Ajouter une tache</p>
                <form method='post' onSubmit={addTodoItem} className='flex w-fit mt-2 space-x-2'>
                    <input name='todoText' type="text" className='todo-item-text-input rounded p-1 w-3/4 bg-transparent' placeholder='nom'/>
                    <button><Image src={AddIcon} className='fill-white' height='25' width='25' alt='Ajouter'/></button>
                </form>
            </div>
        </div>
    );  
}