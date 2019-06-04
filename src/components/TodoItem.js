import React, { Component } from 'react'
/***
 * propTypes are use for validation of props, is good practice to use them
 */
import PropTypes from 'prop-types';

export class TodoItem extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.todo.title}</h3>
      </div>
    )
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

export default TodoItem
