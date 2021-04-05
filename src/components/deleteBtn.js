import React from 'react';

class DeleteBtn extends React.Component {
    render() {
        return (
            <div className="delete-btn" onClick={() => this.props.deleteItem(this.props.id)}>
                Delete
            </div>
        )
    }
}


export default DeleteBtn;