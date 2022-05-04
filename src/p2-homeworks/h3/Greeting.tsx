import React from 'react'
import s from './Greeting.module.css'
import {ChangeEvent, MouseEvent, KeyboardEvent} from "react";

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: (e: MouseEvent<HTMLButtonElement>) => void
    onKeyPressHandler: (e: KeyboardEvent<HTMLInputElement>) => void
    error: boolean
    totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onKeyPressHandler} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : s.addName

    return (
        <div>
            <input
                value={name}
                onChange={setNameCallback}
                className={inputClass}
                onKeyPress={onKeyPressHandler}
                placeholder={"Enter your name"}
            />
            <span>{error}</span>
            <button className={s.button} onClick={addUser}> Add</button>
            <span>{totalUsers}</span>
        </div>
    )
}

export default Greeting
