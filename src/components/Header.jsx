/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

import { paths } from "../pages/routes";
import logo from "../assets/images/logo.svg";

function Header() {
  return (
    <div className="bg-primary-500 text-white px-24 py-5 h-16">
      <ul className="flex gap-10 items-center">
        <NavItem to={paths.home}>
          <img src={logo} alt="Logo" height={100} width={180} />
        </NavItem>
        <NavItem to={paths.home}>Home</NavItem>
        <NavItem to={paths.popularPeople}>People</NavItem>
      </ul>
    </div>
  );
}

function NavItem({ to, children }) {
  return (
    <li className="text-md hover:text-secondary-600 transition hover:cursor-pointer">
      <Link to={to}>{children}</Link>
    </li>
  );
}

export default Header;
