import React, {Component} from 'react';
import './App.css';
import Todos from './components/Todos'

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Do React Poc.',
        completed: true
      },
      {
        id: 2,
        title: 'Do C Sharp language',
        completed: false
      },
      {
        id: 3,
        title: 'Go for the swimming',
        completed: true
      },
    ]
  }
  render(){
    console.log(this.state.todos);
    return (
      <div className="App">
       <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
