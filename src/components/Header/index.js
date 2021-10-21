
import React from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => {
  const { title } = props

  return <h1>
    <Link to="/" style={{ textDecoration: "none", color: "gold" }}>
      Not Amazon</Link> - {title}
  </h1>
}

export default Header