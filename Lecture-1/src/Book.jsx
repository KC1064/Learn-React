import React from "react";
import './Book.css';

const Book = () => {
  return (
    <div className="main">
      <div className="image">
        <img
          src="https://m.media-amazon.com/images/I/81odYpBi6bL._SY522_.jpg"
          alt="Book cover"
        />
      </div>
      <div className="details">
        <h2>Dhoop Aane Do</h2>
        <p>by Gulzar</p>
        <p>Rs 375</p>
        <button>Add To Cart</button>
      </div>
    </div>
  );
};

export default Book;
