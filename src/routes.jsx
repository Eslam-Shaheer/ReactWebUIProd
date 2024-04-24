import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Profile from "./routes/Profile";
import Products from "./routes/Products";
import ProfileEdit from "./routes/ProfileEdit";
import Dashboard from "./routes/Dashboard";
import Layout from "./routes/Layout";
import NotFound from "./routes/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import Product from "./routes/Product";
import Counter from "./routes/Counter";
import NewProducts from "./routes/NewProducts";
import Category from "./routes/Category";
const Login = React.lazy(() => import("./routes/Login"));

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
        // loader: async () => {
        //   await new Promise((resolve) => setTimeout(resolve, 2000));
        // throw new Error();
        //   return { data: [] };
        // },
        errorElement: <NotFound />,
      },
      {
        path: "/login",
        element: (
          <React.Suspense fallback="Loading...">
            <Login />
          </React.Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
        // lazy: () => import("./routes/Contact"),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/new-products",
        element: <NewProducts />,
      },
      {
        path: "/product/:productID",
        element: <Product />,
      },
      {
        path: "/profile",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
      {
        path: "/profile/dashboar",
        element: <Dashboard />,
      },
      {
        path: "/counter",
        element: <Counter />,
      },
      {
        path: "/profile/edit",
        element: <ProfileEdit />,
      },
      {
        path: "/category",
        element: <Category />,
      },
    ],
  },
]);

export default routes;
