import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
  getStyle = () =>{
    return{
     // borderLeft : "2px solid #ff1452",
      padding: '10px',
      borderBottom: '1px #ccc solid',
      textDecoration: this.props.todo.completed  ? 'line-through' : 'none',
      background: this.props.todo.completed ? '#cccccc':'#ffffff',
    }
  }

  


  render() {
    const { id, title } = this.props.todo;
    console.log(localStorage);
    return (
      <div style={this.getStyle()} >
        <p className = 'task' onClick = {this.props.markComplete.bind(this,id)}>
          
          {title}
          
        </p>
        <button onClick = {this.props.delTodo.bind(this, id)} style = {btnStyle}>-</button>
      </div>
    )
  }
}

// PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 10px',
  borderRadius: '30%',
  cursor: 'pointer',
  float: 'right',
  marginTop : '-24px'
}



export default TodoItem
