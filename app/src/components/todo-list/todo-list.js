import React from 'react';
import ReactDOM from 'react-dom';
import TodoItem from '../todo-list-item';

import './todo-list.css';


export default class TodoList extends React.Component{

    isCurentBtn


    render(){
        const {data, onDeleted, itemToggleImportant, itemToggleDone} = this.props;

        const list = data.map(( item )=>{
    
        const {id , ...props} = item;
    
            return(
                <li 
                    key={id}
                    className='list-group-item todo-item'>                          
                        <TodoItem {...props}
                                    onDeleted={() => onDeleted(id)}
                                    toggleImportant={() => itemToggleImportant(id)}
                                    toggleDone={() => itemToggleDone(id)}/>
                </li>
            )
        });
    
        return(
            <ul className='list-group todo-list '>
                {list}
            </ul>
        );
    }
};


