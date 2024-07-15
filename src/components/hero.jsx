import React from "react";
import Gallery from "./books";

function Hero() {
  return Gallery.books.forEach((ele, index) => {
    <section key={index}>
      <h1>{ele.title}</h1>
      <p>{ele.author}</p>
      <p>{ele.isbn}</p>
    </section>;
  });
}

export default Hero;
