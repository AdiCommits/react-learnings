import React from "react";
import ReactDOM from "react-dom/client";

const Booklist = () => {
  return (
    <section>
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <article>
      <img
        src="./images/subtle_art_of_not_giving_fk.jpg"
        alt="The Subtle Art of Not Giving a F*ck"
      />
      <h2> The Subtle Art of Not Giving a F*ck</h2>
      <h2> Mark Manson</h2>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Booklist />);
