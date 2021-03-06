import React, {Component} from 'react';
import '../App.css';
import TodoItem from './TodoItem';
/***
 * propTypes are use for validation of props, is good practice to use them
 */
import PropTypes from 'prop-types';

class Todos extends Component {
  render() {
    return this.props.todos.map((todo) => (
      <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo}/>
    ));
  }
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired, 
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
}

export default Todos;
