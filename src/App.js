import React, { Component } from 'react';
import Header from './components/layout/Header'
  
import {BrowserRouter as Router,Route } from 'react-router-dom'

import Todos from './components/Todos';
import './App.css';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import uuid from 'uuid';



class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Take out the trash',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Make Dinner',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Finish making ToDo app',
        completed: false
      }
    ]
  }
//Toggle Complete
  markComplete= (id) =>{
    this.setState({todos: this.state.todos.map(todo =>{
      if(todo.id === id){
        todo.completed = !todo.completed;
      }
      return todo;
    }) })
  }

  delTodo = (id) => {
    this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]});
  }


  addTodo = (title) =>{
    var now = new Date();
    var date = now.getHours() + ":" + now.getMinutes() + " " + now.getDate() + "-" + (now.getMonth() + 1) + "-" + now.getFullYear();
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false,
      date: date,
      storage: now
    }
    this.setState({todos: [...this.state.todos, newTodo]})
  }

  componentDidUpdate(prevProps, prevState){
    localStorage.setItem('todos', JSON.stringify(this.state.todos))
  }

  componentDidMount(){
    localStorage.getItem('todos')&& this.setState({
      todos: JSON.parse(localStorage.getItem('todos'))
    })
  }

  render() {
   
    return (
      <Router>
        <div className="App" style = {borderStyle} >
          <div className = "container">
            <Header todos ={this.state.todos} />
            <Route exact path = "/" render = {props => (
              <React.Fragment>
                <Todos todos = {this.state.todos} markComplete={this.markComplete} delTodo = {this.delTodo}/>
                <AddTodo  addTodo = {this.addTodo} />
              </React.Fragment>
            )}/>
            <Route path = "/about" component = {About}/>
          </div>
        </div>
      </Router>
    );
  }
}


const borderStyle = {
  borderRadius: "25px",
  backGround: "#73AD21",
  height: "300px"
}


export default App;