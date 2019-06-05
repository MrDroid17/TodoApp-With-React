import React from 'react';

function Header() {
  return (
    <header style={headerStyle}>
      <h1>
        Todo List
      </h1>
    </header>
  )
}

const headerStyle = {
  background: '#000000',
  padding: '10px',
  textAlign: 'center',
  color: '#FFFFFF'
}

export default Header;