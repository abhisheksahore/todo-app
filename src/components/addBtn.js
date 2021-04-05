import React from 'react';

class AddBtn extends React.Component {
    render() {
        console.log(this.props.removePop)
        return (
            <div className="delete-btn" onClick={() => this.props.removePop(this.props.id)} >
                Add 
            </div>
        )
    }
}

export default AddBtn;