

// const book1 = {
//   image:
//     "https://m.media-amazon.com/images/I/71nAPgrH3aL._AC_UY545_FMwebp_QL65_.jpg",
//   title: "The Compound Effect",
//   author: "Darren Hardy",
//   price: "175",
// };


// const book2={
//     image: "https://m.media-amazon.com/images/I/81eB+7+CkUL._AC_UY545_FMwebp_QL65_.jpg",
//     title: "Atomic Habits",
//     author: "James Clear",
//     price: "199"
//   }
import React from "react";
import Books from "./Books";
import data from "./books.json"; 

const BookList = () => {
  const { books } = data;
  return (
    <div>
      {books.map((ele) => {
        return (
          <Books
            image={ele.image}
            title={ele.title}
            author={ele.author}
            price={ele.price}
          />
        );
      })}
    </div>
  );
};

export default BookList;


