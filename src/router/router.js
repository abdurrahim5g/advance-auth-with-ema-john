import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Shop from "../components/Shop/Shop";
import Orders from "../components/Orders/Orders";
import Inventory from "../components/Inventory/Inventory";
import About from "../components/About/About";
import { productsAndCartLoader } from "../loaders/productsAndCartLoader";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Shipping from "../components/Shipping/Shipping";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        loader: () => fetch("products.json"),
        element: <Shop></Shop>,
      },
      {
        path: "orders",
        loader: productsAndCartLoader,
        element: <Orders></Orders>,
      },
      {
        path: "inventory",
        element: <Inventory></Inventory>,
      },
      {
        path: "shipping",
        element: <Shipping></Shipping>,
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
