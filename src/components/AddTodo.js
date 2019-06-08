import React, { Component } from 'react'

export class AddTodo extends Component {

  state = {
    title: ''
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({title: ''});
  }

  render() {
    return (

      <form onSubmit={this.onSubmit} style={{ display: 'flex', height: '40px', padding: '5px 250px' }}>
        <input
          type="text"
          name="title"
          placeholder="Add Todo ..."
          style={{ flex: 10 }}
          onChange={this.onChange} />

        <input type="submit" value="submit" className="btn" style={{ flex: 1 }}></input>

      </form>
    )
  }
}

export default AddTodo
