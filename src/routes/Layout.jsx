import React from "react";
import Sidebar from "../components/Sidebar";
import Nav from "../components/Nav";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Nav />
      <div className="d-flex flex-fill">
        <div className="col-2 d-flex flex-fill ">
          <Sidebar />
        </div>
        <div className="col-10">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Layout;

{
  /* <CategoryContextProvider>
<div className="col-2 d-flex flex-fill ">
  <Sidebar />
</div>
<div className="col-10">
  <CategoryProducts />
</div>
</CategoryContextProvider> */
}
