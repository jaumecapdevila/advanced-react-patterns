import React from 'react'

const MenuItem = ({ children, toggleMenu, link }) => (
  <p>
    <a style={{ cursor: 'pointer' }} onClick={ () => toggleMenu() }>
      { children }
    </a>
  </p>
)

export default MenuItem
