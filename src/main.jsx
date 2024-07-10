import React from "react";
import gallery from "./books";

function Main() {
  gallery.books.map((element) => {
    return (
      <div className="books">
        <h2>{element.title}</h2>
        <p className="auther-name">{element.author}</p>
        <p className="isbn">{element.isbn}</p>
      </div>
    );
  });
}

export default Main;
