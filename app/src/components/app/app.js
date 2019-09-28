import React from 'react';
import ReactDOM from 'react-dom';

import TodoList from '../todo-list';
import Header from '../header';
import SearchPanel from '../search-panel';
import TodoFilter from '../todo-list-filter';
import AddNewItem from '../todo-new-list-item';

import './app.css'


export default class App extends React.Component{

    int_id = 0;

    state = {
        todo_data:[
            
        ],
        active_button: 'All',

        search: '',
    }

    deleteItem = (id) => {
        this.setState(({todo_data}) =>{
            const int = todo_data.findIndex((el)=> el.id === id);

            const new_array = [
                ...todo_data.slice(0, int),
                ...todo_data.slice(int + 1)
            ];
            return {todo_data: new_array};
        })
    }

    createTodoItem(label){
        return {
            label,
            important: false,
            done: false,
            id: this.int_id++
        }
    }

    addItem = (text) => {
        this.setState(({todo_data}) => {
            const new_array = [...todo_data, this.createTodoItem(text)];

            return {todo_data: new_array}
        })
    }

    itemToggle(arr, prop,id){
        const int = arr.findIndex((el)=> el.id === id);
        const oldItem = arr[int];

        const newItem = {...oldItem, [prop]: !oldItem[prop]};

        const new_array = [
            ...arr.slice(0, int),
            newItem,
            ...arr.slice(int + 1)
        ];
        return new_array;
    }


    itemToggleDone = (id) =>{
        this.setState(({todo_data}) =>{ 
            return {todo_data: this.itemToggle(todo_data, 'done', id)};
        });
    }

    
    itemToggleImportant = (id) =>{
        this.setState(({todo_data}) =>{
            return {todo_data: this.itemToggle(todo_data,'important', id)};
        })
    }

    isCurentButton(btn, data){
  
        if(btn === 'All')  return data;

        if(btn === 'Active') return data.filter((item) => !item.done); 
        
        if(btn === 'Done') return data.filter((item) => item.done);
    }

    setCurentBtn = (e) => {
        this.setState({active_button: e.target.value});
    }

    changeSearch = (e) => {
        this.setState({search: e.target.value});
    }

    onSearchInData(search, data){
         return data.filter((item) => {
            if(item.label.slice(0, search.length) === search){
                return item;
            }
        })
    }

    returnCurentData(search,btn,data,onSearch, isCurentBtn){
        const cur_data = isCurentBtn(btn,data);

        if(search.length > 0){
            return onSearch(search, cur_data)
        }else{
            return cur_data;
        }
    }

    render(){
        const {active_button, todo_data, search} = this.state;

        const done = this.state.todo_data.filter((item) => item.done).length;

        const todo = this.state.todo_data.length - done;


        return(
            <div className='container todo '>
               <div className="row justify-content-center">
                        <Header 
                            done = {done} 
                            todo = {todo}/>
                    <div className="form-inline">
                        <SearchPanel 
                                value    = {search}
                                onSearch = {this.changeSearch}/>
                        <TodoFilter 
                            onCurent = {this.setCurentBtn}
                            curent   = {active_button}/>
                    </div>
                    <TodoList 
                            data                = {todo_data}
                            search              = {search}
                            isCurentBtn         = {this.isCurentButton}
                            isSearch            = {this.onSearchInData}
                            search              = {search}
                            curentData          = {this.returnCurentData}
                            curentBtn           = {active_button}
                            onDeleted           = {this.deleteItem}
                            itemToggleImportant = {this.itemToggleImportant}
                            itemToggleDone      = {this.itemToggleDone}/>
                    <AddNewItem addItem={this.addItem}/>
               </div>
            </div>
        )
    }
}