import React, { useContext } from "react";

import BookItem from "./BookItem";
import { DataContext } from "./Context";
import Spinner from "./Spinner";

import "../styles/books.scss";

export default function Books() {
  const { data, loading } = useContext(DataContext);
  const books = data.items || [];

  if (data.kind && data.totalItems === 0) {
    return (
      <span className="holderText">☹ Nothing Found! Try Another Query.</span>
    );
  }

  return (
    <div className="books">
      {loading ? (
        <Spinner />
      ) : !books.length ? (
        <span className="holderText">
          ☹ Nothing Here Yet - Try Searching For A Book!
        </span>
      ) : (
        <BookItem books={books} />
      )}
    </div>
  );
}
