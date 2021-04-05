import React from 'react';
import AddBtn from './addBtn'

class AddItemInput extends React.Component {
    render() {
        return (
            this.props.addPopup?
            <div className='list-item'>
                <input type='text' placeholder='Item Name' onChange={(e) => this.props.inputText(e.target.value) }/>
                <AddBtn removePop={this.props.removePop} />
            </div>:
            null
        )
    }
}

export default AddItemInput;