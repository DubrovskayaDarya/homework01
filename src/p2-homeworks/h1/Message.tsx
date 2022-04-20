import React from 'react'
import s from './Message.module.css'

type MessageType = {
    avatar: string
    name: string
    message: string
    time: string

}

function Message(props: MessageType) {
    return (
        <div className={s.parent}>
            <div>
                <img className={s.avatar} src={props.avatar}/>
            </div>
            <div className={s.stupidButWorks}>' '</div>
            <div className={s.message}>
                <div className={s.name}>{props.name}</div>
                {props.message}
                <div className={s.time}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message
