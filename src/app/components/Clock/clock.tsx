'use client'

import { useState, useEffect } from 'react'
import { ClockProps } from '../../types/Props.type'
import { MonthUtil } from '../../utils/Month.util';

export default function Clock({className}: ClockProps) {

    const [date, setDate] = useState('')
    const [time, setTime] = useState('')

    useEffect(() => {
        const timer = setInterval(() => {
            const date = new Date();
            setDate(`${date.getDay()} ${getMonth(date.getMonth())} ${date.getFullYear()}`);
            setTime(`${date.getHours()}:${addZero(date.getMinutes())}`);
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const getMonth = (month: number) => {
        return MonthUtil.monthes['fr'][month];
    }

    const addZero = (value: number) => {
        return value < 10 ? `0${value}` : value;
    }

    return (
        <div className = { `dateTimeContainer ${className}` }>
            <h1 className = 'time'>{time}</h1>
            <h2 className = 'date'>{date}</h2>
        </div>
    )
}
