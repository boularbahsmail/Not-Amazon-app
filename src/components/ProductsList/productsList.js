import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

// SCSS
import './productsList.scss';

const ProductList = ({ products }) => {
  // Scroll to top automatically
  useEffect(() => {
    window.scrollTo(0, 0)
}, []);
  return (
    <div className="container">
      <div className="Cards">
        {
          products.map(product =>
            <div className="Card">
              <div className="Card-Img">
                <img className="p-img" src={product.imgUrl} alt="Product image" title={product.name} />
              </div>
              <div className="Card-Text">
                <h3 className="Product-name">{product.name}</h3>
                <p>Color: {product.color}</p>
                <p>Size: {product.size}</p>
                <b>{product.price}</b> <strike>{product.oldPrice}</strike>
                <div className="view-product">
                  <Link to={`${product.id}`} title={product.name} className="viewProductButton">
                    View Product
                  </Link>
                </div>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default ProductList;
