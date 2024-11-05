/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

import { paths } from "../pages/routes";
import logo from "../assets/images/logo.svg";
import { useState } from "react";

function Header() {
  return (
    <div className="bg-primary-500 text-white px-24 py-5 h-16">
      <ul className="flex gap-10 items-center">
        <NavItem to={paths.home}>
          <img src={logo} alt="Logo" height={100} width={180} />
        </NavItem>
        <NavItem to={paths.home}>Home</NavItem>
        <NavItem to={paths.home}>Movies</NavItem>
        <NavItem to={paths.popularPeople}>People</NavItem>
        <NavList>Test</NavList>
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

function NavList({ children }) {
  const [showList, setShowList] = useState(true);

  function handleShowList(isShowList) {
    setShowList(isShowList);
  }

  return (
    <li
      className="hover:cursor-pointer"
      onMouseEnter={() => handleShowList(true)}
      onMouseLeave={() => handleShowList(true)}
    >
      {children}
      {showList && (
        <div className="bg-secondary-500 absolute flex gap-4 flex-col rounded-md">
          <NavListItem>Popular</NavListItem>
          <NavListItem>Now Playing</NavListItem>
          <NavListItem>Upcoming</NavListItem>
          <NavListItem>Top Rated</NavListItem>
        </div>
      )}
    </li>
  );
}

function NavListItem({ children }) {
  return <div className="hover:bg-gray-300 mx-3">{children}</div>;
}

export default Header;
