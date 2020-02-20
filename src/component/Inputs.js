import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addTask} from '../actions/actions'
 class Inputs extends Component {
    constructor(props){
        super(props);
        this.state={
            textInput:''
           
        }
        
    }
    handleText=(event)=>{
        this.setState({
            textInput:event.target.value
        })
    }
    // onClick=()=>{
    //     this.setState({
    //         List:[...List,{title:textInput}]
    //     })
    // }
    render() {
        return (
            <div>
                <input type="text" value={this.state.textInput} onChange={this.handleText}/>
                <button onClick={()=>this.props.add({title:this.state.textInput,id:Date.now(),completed:false,edited:false})} >Add</button>
                
                
            </div>
        )
    }
}
// const mapStateToProps=state=>({

// })
const mapDispatchToProps=dispatch=>({
    add:(task)=>dispatch(addTask(task))
})

export default connect(null,mapDispatchToProps) (Inputs)