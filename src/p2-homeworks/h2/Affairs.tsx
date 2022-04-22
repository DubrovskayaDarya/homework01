import React from 'react'
import {Affair} from "./Affair";
import {AffairType, FilterType} from './HW2'
import {MouseEvent} from "react";
import s from './Button.module.css'

type AffairsPropsType = { // need to fix any
    data: AffairType[]
    setFilter: any
    deleteAffairCallback: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((element) => (
        <Affair // should work
            key={element._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={element}
            deleteAffairCallback={() => props.deleteAffairCallback(element._id)}
        />
    ))

    const setAll = (e: MouseEvent<HTMLButtonElement>) => {
        props.setFilter('all')
    } // need to fix
    const setHigh = (e: MouseEvent<HTMLButtonElement>) => {
        props.setFilter('high')
    }
    const setMiddle = (e: MouseEvent<HTMLButtonElement>) => {
        props.setFilter('middle')
    }
    const setLow = (e: MouseEvent<HTMLButtonElement>) => {
        props.setFilter('low')
    }

    return (
        <div>

            {mappedAffairs}

            <button className={s.buttonAll} onClick={setAll}>All</button>
            <button className={s.buttonHigh} onClick={setHigh}>High</button>
            <button className={s.buttonMid} onClick={setMiddle}>Middle</button>
            <button className={s.buttonLow} onClick={setLow}>Low</button>
        </div>
    )
}

export default Affairs
