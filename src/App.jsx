import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import Login from "./pages/Login";
import HomeWrapper from "./wrappers/HomeWrapper";
import productsLoader from "./loaders/productsLoader";
import ProductDetails from "./pages/ProductDetails";

// create a router object
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeWrapper />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "register",
        element: <Register />
      },
      {
        path: "login",
        element: <Login />
      }
    ]
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    loader: productsLoader,
    hydrateFallbackElement: <p>Loading Products...</p>
  },
  {
    path: "/product",
    element: <ProductDetails />,
  }
]);

const App = () => {
  return <RouterProvider router={router} />
}

export default App;