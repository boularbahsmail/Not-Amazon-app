import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import products from '../../data/data.json';

// SCSS
import './singleProduct.scss';

const Single_Product = ({ product }) => {
    // Scroll to top 
    const toTop = () => {
        window.scrollTo(0, 0);
    }
    // Not selected products array
    let others = [];
    let selectedProductName = product.name;
    
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
                    <div className="addToCard">
                    <button title="Add to card">add to card</button>
                </div>
            </div>
            </div>
            <br />
            <h2>Products you may like</h2>
            <div className="allExceptTheSelected">
                {
                    products.filter((one) => {
                        if (one.name != selectedProductName) {
                            // console.log(one);
                            others.push(one);
                            // console.log(others)
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

    // Take few words from products names
    let pNamep = document.getElementById("p-name-p").textContent;
    function getWordStr(str) {
        return str.split(/\s+/).slice(0,5).join(" ");
    }

    getWordStr(pNamep)
}

export default Single_Product;
