import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Pages";
import s from './pages/Links.module.css'

function Header() {
    return (
        <div className={s.container}>
            <div className={s.header}>
                <NavLink to={PATH.PRE_JUNIOR}
                         className={({isActive}) => isActive ? 'active' : 'default-link'}>PreJun</NavLink>
                <NavLink to={PATH.JUNIOR}
                         className={({isActive}) => isActive ? 'active' : 'default-link'}> Jun </NavLink>
                <NavLink to={PATH.JUNIOR_PLUS}
                         className={({isActive}) => isActive ? 'active' : 'default-link'}> JunPlus </NavLink>
            </div>
        </div>
    )
}

export default Header
