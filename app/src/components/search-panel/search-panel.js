import React from 'react';
import ReactDOM from 'react-dom';

import './search-panel.css';

const SearchPanel = (props) =>{ 
    const {search, onSearch} = props;
    return( 
            <input 
                type        = "text" 
                placeholder = "search" 
                className   = "form-control search" 
                value       = {search} 
                onChange    = {onSearch}/>
    );
};

export default SearchPanel;