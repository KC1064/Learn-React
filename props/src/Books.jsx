import React from "react";
import './Books.css';

const Books = (props) => {
    // Destructuring the props
    const { image, title, author, price } = props;
    return (
        <div className="main">
            <div className="image">
                <img
                    src={image}
                    alt="book-image"
                />
            </div>
            <div className="details">
                <h2>{title}</h2>
                <p>by {author}</p>
                <h5>Rs {price}</h5>
                <button>Add To Cart</button>
            </div>
        </div>
    ); 
};

export default Books;


    // Alternative Way of using props without destructuring
    // return (
    //     <div className="main">
    //         <div className="image">
    //             <img
    //                 src={props.image}
    //                 alt="book-image"
    //             />
    //         </div>
    //         <div className="details">
    //             <h2>{props.title}</h2>
    //             <p>by {props.author}</p>
    //             <h5>Rs {props.price}</h5>
    //             <button>Add To Cart</button>
    //         </div>
    //     </div>
    // );
