import { Link } from "react-router-dom";

const PRODUCTS = [
  { id: "product-1", title: "Product 1" },
  { id: "product-2", title: "Product 2" },
  { id: "product-3", title: "Product 3" },
];

export function Products() {
  return (
    <>
      <h1>Products Page</h1>
      <ul>
        {PRODUCTS.map((prod) => (
          <li>
            <Link key={prod.id} to={prod.id}>
              {prod.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
