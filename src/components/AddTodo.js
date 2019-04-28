import React, { Component } from 'react'

export default class AddTodo extends Component {

    state = {
        title: ''
    }

    onSubmit = (e) =>{
        e.preventDefault();
        if(this.state.title !== ''){
            this.props.addTodo(this.state.title);
            document.getElementById('form').placeholder = "Add a task...";
        }else{
            document.getElementById('form').placeholder = "Please enter a task";
        }
        this.setState({title : ''});    
    }


    onChange = (e) => this.setState({title: e.target.value});

    render() {
        return (
        <form onSubmit = {this.onSubmit} style = {{display: 'flex'}}>
            <input
                id = 'form'
                type = "text"
                name = "title"
                style = {{flex : '10'}}
                placeholder= "Add a task..."
                className = "form"
                value = {this.state.title}
                onChange = {this.onChange}
            />
            <input
                type = "submit"
                value = "Submit"
                className="btn"
                style = {{flex : '1'}}
                />
        </form>
        )
    }
}
