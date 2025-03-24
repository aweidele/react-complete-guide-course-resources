import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { Products } from "./pages/Products";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/products", element: <Products /> },
]);

function App() {
  return (
    <>
      <h1>This is the site title</h1>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
