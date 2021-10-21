import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/data.json'

// Components
import SingleProduct from '../components/SingleProduct';

const Product_page = (props) => {
    // Scroll to top automatically
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    const { id: productId } = useParams()

    const product = products.find(({ id }) => id === parseInt(productId))

    return (
        <center>
            <div className="container" style={{ textAlign: "left" }}>
                <SingleProduct product={product} />
            </div>
        </center>
    )
}

export default Product_page;
