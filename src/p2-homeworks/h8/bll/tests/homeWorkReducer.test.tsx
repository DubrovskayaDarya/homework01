import React from 'react'
import {homeWorkReducer} from '../homeWorkReducer'
import {UserType} from "../../HW8";

let initialState: Array<UserType>

beforeEach(() => {
    initialState = [
        {_id: 0, name: 'Кот', age: 3},
        {_id: 1, name: 'Александр', age: 66},
        {_id: 2, name: 'Коля', age: 16},
        {_id: 3, name: 'Виктор', age: 44},
        {_id: 4, name: 'Дмитрий', age: 40},
        {_id: 5, name: 'Ирина', age: 55},
    ]
})

test('sort name up', () => {
    const newState = homeWorkReducer(initialState, {type: 'sort', payload: 'up'})

    expect(newState[0].name).toBe('Александр');
    expect(newState[0]._id).toBe(1);
    expect(newState.length).toBe(6);
    expect(newState[5].name).toBe('Кот');
    expect(newState[4].name).toBe('Коля');
});

test('sort name down', () => {
    const newState = homeWorkReducer(initialState, {type: 'sort', payload: 'down'})

    expect(newState[0].name).toBe('Кот');
    expect(newState[0]._id).toBe(0);
    expect(newState.length).toBe(6);
    expect(newState[5].name).toBe('Александр');
    expect(newState[1].name).toBe('Коля');
});

test('check age 18', () => {
    const newState = homeWorkReducer(initialState, {type: 'check', payload: 18})

    expect(newState.length).toBe(4);
    expect(newState.map((e: UserType) => e.age)).not.toBe(3);
    expect(newState.map((e: UserType) => e.age)).not.toBe(16);
});
