import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Pages";
import s from './pages/Links.module.css'

function Header() {
    return (
        <div className={s.header}>
            <span><NavLink to={PATH.PRE_JUNIOR} className={({isActive})=>isActive? 'active':'default-link'}>PreJun </NavLink></span>
            <span><NavLink to={PATH.JUNIOR} className={({isActive})=>isActive? 'active':'default-link'}>Jun </NavLink></span>
            <span><NavLink to={PATH.JUNIOR_PLUS} className={({isActive})=>isActive? 'active':'default-link'}>JunPlus </NavLink></span>
        </div>
    )
}
// style={(param)=>({color: param.isActive ? 'purple':'grey'})
export default Header
