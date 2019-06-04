import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos'

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Do React Poc.',
        completed: false
      },
      {
        id: 2,
        title: 'Do C Sharp language',
        completed: false
      },
      {
        id: 3,
        title: 'Go for the swimming',
        completed: false
      },
    ]
  }
  // mark complete toggle state
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => { 
        if(todo.id === id){
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  }

  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} markComplete={this.markComplete} />
      </div>
    );
  }
}

export default App;
