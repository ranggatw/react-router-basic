import { NavLink } from "react-router-dom";

function Navbar() {
  const navLinkStyles = ({ isActive }) => {
    // destructured in function parameter isActive
    // isActive default will be set "true" if the link is indeed the current route
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
    };
  };

  return (
    <nav>
      {/* 1. Navlink have a active class for styling */}
      {/* <NavLink to="/about">About</NavLink> */}
      {/* 4. We can create style prop in this navlinks */}
      <NavLink style={navLinkStyles} to="/">
        Home
      </NavLink>
      <NavLink style={navLinkStyles} to="/about">
        About
      </NavLink>
    </nav>
  );
}

export default Navbar;



// Notes :
// Navlink is specific use for create component like : Navbar, Breadcrumb or a set of tabs. Where you like to highlight the current selected items 