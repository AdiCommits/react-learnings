import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const Booklist = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => {
  return (
    <img
      src="./images/subtle_art_of_not_giving_fk.jpg"
      alt="The Subtle Art of Not Giving a F*ck"
    />
  );
};
const Title = () => <h2> The Subtle Art of Not Giving a F*ck</h2>;
const Author = () => <h2> Mark Manson</h2>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Booklist />);
