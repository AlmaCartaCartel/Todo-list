import React from 'react';
import ReactDOM from 'react-dom';

import './todo-new-list-item.css';

export default class AddNewItem extends React.Component{

    state = {
        label: ''
    }

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault(); 
        this.props.addItem(this.state.label);
        this.setState({
            label: ''
        })
    }
    
    render(){
        return(
            <form 
                className = "item-add-form d-flex"
                onSubmit  = {this.onSubmit}>
                <input 
                    type        = "text" 
                    className   = "form-control" 
                    placeholder = "Enter task" 
                    value       = {this.state.label}
                    onChange    = {this.onLabelChange}/>
                <button 
                    className="btn btn-info">Add</button>
            </form>
        )
    }
}