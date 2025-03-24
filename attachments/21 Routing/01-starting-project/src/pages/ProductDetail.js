import { Link, useParams } from "react-router-dom";

export function ProductDetailPage() {
  const params = useParams();

  return (
    <>
      <h1>Product Detail</h1>
      <p>{params.productId}</p>
      <p>
        <Link to=".." relative="path">
          Back
        </Link>{" "}
        {/* use relative="path" to make the link relative to the current path, instead of the route structure. (default is relative="route") */}
      </p>
    </>
  );
}
