import React, { Component } from 'react'

export class AddTodo extends Component {
  render() {
    return (
      <form style={{ display: 'flex', height: '40px', padding: '5px 250px'}}>
        <input type="text" name="title" placeholder="Add Todo ..." style={{ flex: 10 }} />
        <input type="submit" value="submit" className="btn" style={{ flex: 1 }}></input>

      </form>
    )
  }
}

export default AddTodo
