import React from 'react';

function Header(){
    return (
        <header style = {headerStyle}>   
            <h1>To-Do List </h1>
        </header>
    )
}

const headerStyle = {
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