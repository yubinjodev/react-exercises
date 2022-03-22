import { Link } from "react-router-dom";

export const NavMenu = () => {
  return (
    <nav style={{ padding: "8px" }}>
      <Link
        style={{ padding: "8px", color: "black", textDecoration: "none" }}
        to="/search-bar"
      >
        1. Search Bar
      </Link>
      <Link
        style={{ padding: "8px", color: "black", textDecoration: "none" }}
        to="/simple-counter"
      >
        2. Simple Counter
      </Link>
      <Link
        style={{ padding: "8px", color: "black", textDecoration: "none" }}
        to="/list"
      >
        3. Display List
      </Link>
      <Link
        style={{ padding: "8px", color: "black", textDecoration: "none" }}
        to="/accordion"
      >
        4. Accordion
      </Link>
      <Link
        style={{ padding: "8px", color: "black", textDecoration: "none" }}
        to="/image-slider"
      >
        5. Image Slider
      </Link>
      <Link
        style={{ padding: "8px", color: "black", textDecoration: "none" }}
        to="/checklist"
      >
        6. Checklist
      </Link>

      <Link
        style={{ padding: "8px", color: "black", textDecoration: "none" }}
        to="/print-data-api"
      >
        7. Print Data API
      </Link>
      <Link
        style={{ padding: "8px", color: "black", textDecoration: "none" }}
        to="/context-api"
      >
        8. Context API
      </Link>
    </nav>
  );
};
