import React from 'react'
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {loadingAC} from "./bll/loadingReducer";
import {AppStoreType} from "./bll/store";
import load from './assets/loading.svg'
import s from './Loading.module.css'

function HW10() {
    // useSelector, useDispatch

    const loading = useSelector<AppStoreType, boolean>(state => state["loading"].isLoading)
    const dispatch = useDispatch();

    const setLoading = () => {
        dispatch(loadingAC(true))

        setTimeout(() => {
            dispatch(loadingAC(false))
        }, 3000)

        console.log('loading...')
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {loading
                ? (
                    <div>
                        <img alt={'loadingIcon'} src={load} className={s.loading}/>
                    </div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }
        </div>
    )
}

export default HW10
