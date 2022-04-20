import React from 'react'
import {MouseEvent} from "react";
import {AffairType} from "./HW2";
import s from './Button.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

export function Affair(props: AffairPropsType) {
    const deleteHandler = (e: MouseEvent<HTMLButtonElement>) => {
        props.deleteAffairCallback(props.affair._id)
    }
    return (
        <div>
            <button className={s.button} onClick={deleteHandler}>X</button>
            {props.affair.name}  -  {props.affair.priority}
        </div>
    )
}
