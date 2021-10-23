import React from 'react';
import Header from '../components/Header';

const Card = () => {
    document.title = "Not Amazon - Shopping Card";
    return (
        <center>
            <div className="Card container">
              <Header />
              <h1>Card</h1>
            </div>
        </center>
    )
}

export default Card
