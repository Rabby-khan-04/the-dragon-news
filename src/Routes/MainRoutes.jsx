import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/main";
import Home from "../Pages/Home/Home/Home";
import News from "../Pages/Shared/News/News";
import NewsDetails from "../Pages/Shared/News/NewsDetails/NewsDetails";
import NewsLayout from "../Layouts/NewsLayout";
import LoginLayout from "../Layouts/LoginLayout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";

export const mainRoute = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "category/:id",
        element: <News />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/category/${params.id}`),
      },
    ],
  },
  {
    path: "news",
    element: (
      <PrivateRoute>
        <NewsLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: ":id",
        element: <NewsDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/news/${params.id}`),
      },
    ],
  },
  {
    path: "login",
    element: <LoginLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    path: "register",
    element: <LoginLayout />,
    children: [
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
