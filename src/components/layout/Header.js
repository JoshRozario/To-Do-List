import React, { Component }  from 'react';
import PropTypes from 'prop-types';

class Header extends Component {

    
    render(){
        //console.log(this.props.todos);
        let stats = count(this.props.todos);
        return (
            <header style = {headerStyle}>   
                <h1>To-Do List</h1>
                <p className = "counter" >{stats} </p>
            </header>
            
        )
    }
}

function count(list){
    let counter = 0;
    let total = 0;
    list.forEach(element => {
        if(element.completed === true){
            counter++;
        }
        total++;
    });
    let string = (counter + "/" + total + " completed");
    if (string === "0/0 completed"){
        string = '';
    }
    return string;

}

// PropTypes
Header.propTypes = {
    todos: PropTypes.array.isRequired
  }

const headerStyle = {
    position: 'sticky',
    top: '0',
    background: '#ff1452',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
    fontSize : "13px",
    WebkitAppRegion: "drag",
    borderTopLeftRadius: "25px",
    borderTopRightRadius: "25px"
    
}

export default Header;