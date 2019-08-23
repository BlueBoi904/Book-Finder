import React, { useContext } from "react";

import "../styles/books.scss";
import { DataContext } from "./Context";
import Spinner from "react-bootstrap/Spinner";

export default function Books() {
  const { data, loading } = useContext(DataContext);
  if (loading) {
    return (
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    );
  }
  console.log(data);
  return (
    <span className="holderText">
      Nothing here yet! Try searching for a book.
    </span>
  );
}
