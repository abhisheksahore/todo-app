import React from 'react';
import TodoItem from './todoItem'
import AddItemInput from './addItemInput';

class List extends React.Component {
    constructor() {
        super();
         
    }




    render() {
        const { addPopup, removePop, inputText, list, updateChecked, deleteItem } = this.props;
        console.log(list);
        return (
            <div className='todo-list-container'>
                {
                    list.length?
                    list.map((item, i) => {
                     return <TodoItem deleteItem={deleteItem} key={i} id={i} itemText={item.itemText} isChecked={item.isChecked} updateChecked={updateChecked}/>
                    }):
                    null
                }
                <AddItemInput removePop={removePop} addPopup={addPopup} inputText={inputText}/>
            </div>
        )    
    }
}

export default List;