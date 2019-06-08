import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
  return (
    <header style={headerStyle}>
      <h1>
        Todo List
      </h1>
      <Link style={linkStyle} to='/'>Home</Link> | <Link style={linkStyle} to='/about'>About</Link>
    </header>
  )
}

const headerStyle = {
  background: '#000000',
  padding: '10px',
  textAlign: 'center',
  color: '#FFFFFF'
}

const linkStyle = {
  color: '#ffffff',
  textDecoration: 'none'
}

export default Header;