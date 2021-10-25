
import React from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/all';

import './header.scss';

const Header = (props) => {
  const { title } = props;

  return (
    <div className="header">
      <div className="brand">
        <h1>
          <Link to="/" style={{ textDecoration: "none", color: "gold" }}>
            Not Amazon</Link> - {title}
        </h1>
      </div>

      <div className="wishlist">
        <Link to="/card" title="Shopping Card">
          <AiOutlineShoppingCart />
        </Link>
      </div>
    </div>
  )
}

export default Header
