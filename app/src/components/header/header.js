import React from 'react';
import ReactDOM from 'react-dom';

import './header.css';


export default class Header extends React.Component{
    render(){
        const {done, todo} = this.props;

        return(
            <div className="container header">
                <div className="row justify-content-center">
                    <h1>My todo list</h1>
                    <h6 className="info">{`${todo} more to do, ${done} done`}</h6>
                </div>
            </div>
        )
    }
}