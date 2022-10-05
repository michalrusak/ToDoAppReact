import React, { Component } from 'react';
import './styles/AddTask.scss'

class AddTask extends Component {
    state = { 
        value: '',
     } 

    handleText = (e) => {
        this.setState({
            value: e.target.value
        })
     }

    addTask = () => {
        const text = this.state.value;
        if(text){
        const add = this.props.addTask(text);
        
        if (add) {
         this.setState({
            value: ''
        })
       }
    }
    }

    keyDown = (e) => {
        if(e.key === 'Enter') this.addTask();
     }

    render() { 
        return ( 
            <div>
            <input value={this.state.value} onChange={this.handleText} onKeyDown={this.keyDown} className='add-input' type="text" />
            <button onClick={this.addTask} className="add-btn">Add</button>
            </div>
         );
    }
}
 
export default AddTask;