import React from 'react';
import ReactDOM from 'react-dom';

import './todo-list-filter.css';


export default class TodoFilter extends React.Component{
    state = {
        buttons: [
            {name: 'All', label: 'All'},
            {name: 'Active', label: 'Active'},
            {name: 'Done', label: 'Done'}
        ]
    }

    render(){
        const active = 'btn btn-info';
        const not_active = 'btn btn-outline-secondary';

        const {onCurent , curent} = this.props;

        const buttons = this.state.buttons.map(({name, label}) => {
            const bol = curent === name;
            const clas = bol ? active : not_active;

            return(
                <button
                  key       = {name}
                  className = {clas}
                  onClick   = {onCurent}
                  value     = {name} 
                  >
                    {label}
                </button>
            )
        })
        

        return(
            <div className='btn-group'>
                {buttons}
            </div>
        )
    }
}