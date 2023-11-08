import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MainLayot from "../Layot/MainLayot";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import AllBook from "../pages/AllBook";
import AddBook from "../pages/AddBook";
import BookDettails from "../pages/BookDettails";
import Edit from "../pages/Edit";
import PrivateRoute from "./PrivateRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayot />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/addBook",
        element: <PrivateRoute><AddBook></AddBook></PrivateRoute>,
      },
      {
        path: "/books",
        element: <AllBook></AllBook>,
      },
      {
        path: "/book/:id",
        element: <BookDettails></BookDettails>,
      },
      {
        path: "/book/edit/:id",
        element: <PrivateRoute><Edit></Edit></PrivateRoute>,
      },
      
      {
        path: "*",
        element: <NotFound></NotFound>,
      },
    ],
  },
]);
