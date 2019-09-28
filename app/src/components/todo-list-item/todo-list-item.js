import React from 'react';
import ReactDOM from 'react-dom';

import './todo-list-item.css';


export default class TodoItem extends React.Component{
    render(){
        const {label, onDeleted, toggleDone, toggleImportant, done , important} = this.props;
     
        let class_names = done ? "col-8 done" : "col-8";
           if(important) {class_names += ' important'};

        return (
            <span className="row justify-content-between ">
                    <span className={class_names}
                          onClick={ toggleDone }>{label}</span>

                    <span className="col-4 btn-group">
                        <button className="btn btn-outline-danger"
                                onClick={onDeleted}>
                            <i className="far fa-trash-alt"></i>
                        </button>
                        <button className="btn btn-outline-success"
                                onClick={ toggleImportant}>
                            <i className="fas fa-exclamation"></i>
                        </button>
                    </span>
            </span>
      
        )
    }
}