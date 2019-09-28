import React from 'react';
import ReactDOM from 'react-dom';

import './todo-list-filter.css';


export default class TodoFilter extends React.Component{
    render(){
        const active = 'btn btn-info';
        const not_active = 'btn btn-outline-secondary';

        const {onCurent , curent} = this.props;

        return(
            <div className='btn-group'>
            <button className={curent === 'All' ? active: not_active}
                    onClick={onCurent}
                    value = 'All'>
                        All
            </button>
            <button className={curent === 'Active' ? active: not_active}
                    onClick={onCurent}
                    value = 'Active'>
                        Active
            </button>
            <button className={curent === 'Done' ? active: not_active}
                    onClick={onCurent}
                    value = 'Done'>
                        Done
            </button>
        </div>
        )
    }
}