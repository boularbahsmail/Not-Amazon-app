import React from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';

import Header from '../Header';
import products from '../../data/data.json';

// SCSS
import './singleProduct.scss';

const SingleProduct = ({ product }) => {

  // Set product name as the page title
  document.title = `Not Amazon - ${product.name}`;

    // Scroll to top
    const toTop = () => {
        window.scrollTo(0, 0);
    }
    // Not selected products array
    let others = [];
    let selectedProductName = product.name;

    // Add products to user cookies
    const addToCard = () => {
      const cookies = new Cookies();
      cookies.set('Product', product, { path: '/' });
      console.log(cookies.get('Product'));
    }

    return (
        <div className="Signle-Product">
            <Header title="Details" />
            <div className="singleProductDiv">
                <div className="singleProductImg">
                    <img
                    src={product.imgUrl}
                    title={product.name}
                     />
                </div>
                <div className="singleProductText">
                    <h2>{product.name}</h2>
                    <p>Color: {product.color}</p>
                    <p>Size: {product.size}</p>
                    <b>{product.price}</b> <strike>{product.oldPrice}</strike>
                    <div className="addToCardDiv">
                    <button id="ADDandREMOVEbutton" title="Add to card" onClick={addToCard}>add to card</button>
                </div>
            </div>
            </div>
            
            <h3 style={{ padding: "10px", fontWeight: "initial" }}>Products you may like</h3>
            <div className="allExceptTheSelected">
                {
                    products.filter((one) => {
                        if (one.name != selectedProductName) {
                            others.push(one);
                        }
                    })
                }

                {
                    others.map(other =>
                        <Link to={`${other.id}`} onClick={toTop}>
                            <div className="otherProduct" title={other.name}>
                                <div className="otherProductImg">
                                    <img
                                        src={other.imgUrl}
                                        style={{ height: "70px" }}
                                    />
                                </div>
                                <div className="otherProductText">
                                    <h5 id="p-name-p">{other.name}</h5>
                                    <b>{other.price}</b> <strike>{other.oldPrice}</strike>
                                </div>
                            </div>
                        </Link>
                    )
                }
            </div>
        </div>
    )
}

export default SingleProduct;
