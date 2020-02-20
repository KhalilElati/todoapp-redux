import { ADD_TASK } from "./actionTypes"
import {DELETE_TASK} from "./actionTypes"
import {COMPLETE_TASK,EDIT_TASK,CLICK} from './actionTypes'

export const addTask=(task)=>{
    return {type:ADD_TASK,payload:task}
}
export const deleteTask=(task)=>{
    return {type:DELETE_TASK,payload:task}
}
export const completeTask=(task)=>{
    return {type:COMPLETE_TASK,payload:task}
}
export const editTask=(task1,task2)=>{
    return {type:EDIT_TASK,payload1:task1,payload2:task2}
}
export const click=(task)=>{
    return {type:CLICK,payload:task}
}
