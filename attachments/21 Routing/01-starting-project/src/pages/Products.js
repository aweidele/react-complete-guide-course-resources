import { Link } from "react-router-dom";

export function Products() {
  return (
    <>
      <h1>Products Page</h1>
      <ul>
        <li>
          <Link to="/products/product-1">Product 1</Link>
        </li>
        <li>Product 2</li>
        <li>Product 3</li>
      </ul>
    </>
  );
}
