import { useForm } from "react-hook-form";
// import Link from "./Link";
import styles from "./Nav.module.css";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../../contexts/ThemeContext";
import { useContext } from "react";
import Link from "./Link";
export default function NavComponent() {
  const { theme, setTheme } = useContext(ThemeContext);

  const isAuthinticated = false;

  const userType = "admin";

  const checkIsAuthinticated = () => {
    return isAuthinticated == true;
  };

  const handleAuthHref = (isAuth) => {
    return isAuth == false ? "Sign in" : "Profile";
  };

  const routes = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Products",
      href: "/products",
    },
    {
      title: "New Products",
      href: "/new-products",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Contact",
      href: "/contact",
    },
    {
      title: "Login",
      href: "/login",
    },
    {
      title: "Profile",
      href: "/profile",
    },
    {
      title: "Category",
      href: "/category",
    },
  ];

  return (
    <Navbar bg="secondary" expand="lg">
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        {/* <Link to={"/home"} title="Title" /> */}
        <Nav className="mr-auto  gap-2">
          {/* <a href={route.href}>{route.title}</a> */}
          {routes.map((route) => (
            <NavLink
              key={route.href}
              to={route.href}
              className={({ isActive, isPending }) =>
                isPending
                  ? styles.navPending
                  : isActive
                  ? styles.navActive
                  : styles.navItem
              }
            >
              {route.title}
            </NavLink>
          ))}

          {/* {isAuthinticated == true ? (
            <Nav.Link href="/profile">Profile</Nav.Link>
          ) : (
            <Nav.Link href="/login">Sign In</Nav.Link>
          )} */}

          {/* {isAuthinticated == false && (
            <Nav.Link href="/login">Sign In</Nav.Link>
          )} */}

          {/* {checkIsAuthinticated() ? (
            <Nav.Link href="/login">Profile</Nav.Link>
          ) : (
            <Nav.Link href="/login">Sign In</Nav.Link>
          )} */}

          {/* <Nav.Link href="/login">{handleAuthHref(isAuthinticated)}</Nav.Link> */}

          {/* {isAuthinticated ? (
            <Nav.Link href="/login">Profile</Nav.Link>
          ) : userType == "admin" ? (
            <Nav.Link href="/login">Dashboard</Nav.Link>
          ) : null} */}
        </Nav>
        <div className="d-flex justify-content-end gap-2 w-100">
          {["light", "dark"].map((item) => (
            <span
              className={`${styles.pointer} ${
                theme == item ? styles.navActive : ""
              }`}
              key={item}
              onClick={() => setTheme(item)}
            >
              {item}
            </span>
          ))}
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}
