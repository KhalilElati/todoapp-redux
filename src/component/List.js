import React from 'react'
import { connect } from 'react-redux'
import {deleteTask,completeTask,click,editTask} from '../actions/actions'

// import {taskReducer} from '../reducer/reducer'
let change=''
const handleChange=(event)=>{
    change=event.target.value

}
 const List=(props)=> {
    return (
        <div>
            {props.todos.map(el=> 
                <div>
                    {el.edited? (<div><input onChange={handleChange} type="text"/>
                    <button onClick={()=>props.edit(el.id,change)}>Change</button></div> ):
                    (<div><p className={el.completed? 'clicked':'none'}>{el.title}</p>
                    <button onClick={()=>props.complete(el.id)}>{el.completed?'Undo':'Complete'}</button>
                    <button onClick={()=>props.delete(el.id)}>Delete</button>
                    <button onClick={()=>props.clicked(el.id)}>Edit</button></div>)}
                </div>
                )}
        </div>
    )
}

const mapStateToProps=state=>{
  return { todos:state}
}
const mapDispatchToProps=dispatch=>({
    delete:(task)=>dispatch(deleteTask(task)),
    complete:(task)=>dispatch(completeTask(task)),
    clicked:(task)=>dispatch(click(task)),
    edit:(task1,task2)=>dispatch(editTask(task1,task2))
})


export default connect(mapStateToProps,mapDispatchToProps) (List)