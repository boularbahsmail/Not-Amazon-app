import React from 'react';

import Header from '../Header';

const Single_Product = ({ product }) => {
    return (
        <div className="Signle-Product">
            <Header title="Single Product" />
            <div>
                {JSON.stringify(product)}
            </div>
        </div>
    )
}

export default Single_Product;
