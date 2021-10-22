import React from 'react';

import Header from '../components/Header';
import ProductList from '../components/ProductsList/productsList';

import products from '../data/data.json'


const Home = () => {
    return (
        <center>
            <div className="Home container">
                <Header title="Store" />
                <ProductList products={products} />
            </div>
        </center>
    )
}

export default Home
