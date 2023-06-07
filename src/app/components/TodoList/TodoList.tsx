'use client'

import { useEffect, useState } from "react";
import { TodoItemType } from "../../types/Data.type";
import TodoItem from "./TodoItem";
import { TodoListProps } from "../../types/Props.type";

export default function TodoList({className}: TodoListProps) {

    const [todoList, setTodoList] = useState<TodoItemType[]>([]);

    useEffect(()=>{
        setTodoList([
            {id: 1, text: 'Faire les courses', isCompleted: false},
        ])
    }, []);

    return(
        <div className={className}>
            { todoList.map((todoItem, key) => {
                return <TodoItem key={key} {...todoItem}></TodoItem>
            })}
        </div>
    );
}