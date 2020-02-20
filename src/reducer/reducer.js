import {ADD_TASK} from '../actions/actionTypes'
import {DELETE_TASK} from '../actions/actionTypes'
import {COMPLETE_TASK,CLICK,EDIT_TASK} from '../actions/actionTypes'

const initState=[]
export const taskReducer=(state=initState,action)=>{
switch(action.type){
    case ADD_TASK:
        return [...state,action.payload]
    case DELETE_TASK:
        return state.filter((el,i)=>el.id!==action.payload)    
    case COMPLETE_TASK:
        return  state.map(el=>
            (el.id==action.payload )
            ?{...el,completed:!el.completed}:el
            // el.completed=!el.completed
            
        )
    case CLICK :
        return state.map(el=>
            (el.id==action.payload)?{...el,edited:!el.edited}:el
            )
        
    case EDIT_TASK:
        return state.map(el=>
            (el.id==action.payload1)?{...el,title:action.payload2,edited:!el.edited}:el
            )
    

    default:return state    
}

}