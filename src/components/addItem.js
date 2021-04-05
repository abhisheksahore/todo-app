import React from 'react';


class AddItem extends React.Component {

    render() {
        return (
            <div className="add-btn" onClick={ () => this.props.addFunc() }>
                Add an Item
            </div>
        )
    }
}

export default AddItem;