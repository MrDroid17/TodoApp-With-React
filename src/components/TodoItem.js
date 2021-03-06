import React, { Component } from 'react'
/***
 * propTypes are use for validation of props, is good practice to use them
 */
import PropTypes from 'prop-types';

export class TodoItem extends Component {
  /**
   * Style in ReactJS can be:
   * 1. inline -- use double curly braces style = {{backgroundColor: '#f4f4f4'}}
   * 2. as const variable   -- need only single curly braces
   * const itemStyle= {backgroundColor: '#f4f4f4'} ;   use as style={itemStyle}>
   * 3. can also use as a function
   *               getStyle = () =>{
                if(this.props.todo.completed) {
                  if(this.props.todo.completed){
                    return {
                      textDecoration: 'line-through'
                    }
                  }else {
                    return {
                      textDecoration: 'none'
                    }
                  }
                }
              }

   * and use as style={this.getStyle()}>
   */

   getStyle = () =>{
      return {
        backgroundColor: '#f4f4f4',
        padding: '10px',
        marginTop: '4px',
        borderBottom: '1px #ccc dotted',
        textDecoration: this.props.todo.completed ? 'line-through' : 'none'
      }
   }

   markComplete = (e) =>{
     console.log(this.props);
   }
  render() {
    /***
     * Destructuring of props
     * and pulling out variables
     */
    const {id, title} = this.props.todo;

    return (
      <div style={this.getStyle()}>
        <p>
        <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {''}
        {title}
        <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>X</button>
        </p>
      </div>
    )
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
}

const btnStyle = {
  backgroundColor: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 9px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}

export default TodoItem;
