import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './Clock.module.css'

const digitToString = (num: number) => num < 10 ? "0" + num : num

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date())
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        clearInterval(timerId)
    };

    const start = () => {
        stop()
        const id = +setInterval(() => {
            setDate(new Date())
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }

    const stringTime = digitToString(date.getHours()) + ":"
        + digitToString(date.getMinutes()) + ":"
        + digitToString(date.getSeconds());

    const stringDate =
        digitToString(date.getDate()) + "."
        + digitToString((+date.getMonth() + 1)) + "."
        + date.getFullYear();

    return (
        <div>
            <div
                className={s.clock}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>

            {show && (
                <div className={s.date}>
                    {stringDate}
                </div>
            )}

            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    )
}

export default Clock
