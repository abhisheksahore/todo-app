import React from 'react';
import List from './components/list';
import AddItem from './components/addItem';
import './App.css';



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      addPopup: false,
      list: [],
      inpText: '',
    }

  }

  addPop = () => {
    this.setState(prev => {
      return {
        ...prev,
        addPopup: true
      }
    })
  }

  removePop = () => {
    this.setState(prev => {
      console.log(prev.list)
      const list = prev.list.map(e => e);
      console.log(list);
      list.push({itemText: prev.inpText, isChecked: false});
      console.log(list);
      return {
        ...prev,
        addPopup: false,
        list
      }
    }, ()=> {
      console.log(this.state)
    })
  }
  
  fromInputText = (e) => {
    this.setState(prev => {
      return {
        ...prev,
        inpText: e
      }
    })
  }

  updateChecked = (id) => {    
    
    this.setState((prev) => {
      const list = this.state.list.map((item, i) => { 
        console.log(typeof(id))
        if (i === id) {
          return {
            ...item,
            isChecked: !item.isChecked
          }
        }
        // console.log(item);
        return item;
      });
      console.log(this.state.list);
      return {
        list
      }
    }, () => {
      console.log(this.state.list)
    })
  }


  deleteItem = (id) => {
    this.setState((prev) => {
      const list = prev.list.filter((item, i) => i!==id);
      return {
        list
      }
    })
  } 

  render() {
    return (
      <div className="App">
        <List deleteItem={this.deleteItem} removePop={this.removePop} addPopup={this.state.addPopup} inputText={this.fromInputText} list={this.state.list} updateChecked={this.updateChecked}/>
        <AddItem addFunc={this.addPop}/>
      </div>
    );
  }
}

export default App;
