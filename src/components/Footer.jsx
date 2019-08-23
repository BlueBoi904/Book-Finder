import React from "react";

import "../styles/footer.scss";

export default function Footer() {
  return (
    <footer>
      <div>Built with React Hooks, CSS Grid and SVG.</div>
      <div>
        Cliff Mirschel &copy; 2019 |{" "}
        <a
          href="https://github.com/BlueBoi904/Book-Finder"
          target="_blank"
          rel="noopener noreferrer"
        >
          source code
        </a>
      </div>
    </footer>
  );
}
