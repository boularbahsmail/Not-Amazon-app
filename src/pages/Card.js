import Reac, { useEffect } from 'react';

const Card = (props) => {
    // Scroll to top automatically
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <center>
            <div className="container" style={{ textAlign: "left" }}>
                <h1>Fuck</h1>
            </div>
        </center>
    )
}

export default Card;
