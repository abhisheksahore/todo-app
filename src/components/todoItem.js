import React from 'react';
import DeleteBtn from './deleteBtn';


class TodoItem extends React.Component {
    render() {
        return (
            <div className="list-item">
                <label>
                    <input id={this.props.id} type="checkbox" checked={this.props.checked} onClick={(e)=>this.props.updateChecked(this.props.id)}/>
                    <span>{this.props.itemText}</span>
                </label>
                <DeleteBtn deleteItem={this.props.deleteItem} id={this.props.id}/>
            </div>
        )
    }
}

export default TodoItem;