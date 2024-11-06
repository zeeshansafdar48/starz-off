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
        <MoviesItems />
        <PeopleItems />
      </ul>
    </div>
  );
}

function NavItem({ to, children }) {
  return (
    <li className="text-md hover:cursor-pointer">
      <Link to={to}>{children}</Link>
    </li>
  );
}

function NavList({ title, children }) {
  const [showList, setShowList] = useState(false);

  function handleShowList(isShowList) {
    setShowList(isShowList);
  }

  return (
    <li
      className="hover:cursor-pointer"
      onMouseEnter={() => handleShowList(true)}
      onMouseLeave={() => handleShowList(false)}
    >
      {title}
      {showList && (
        <div className="bg-white absolute text-black/80 flex flex-col rounded-md py-2 w-44 border border-black-500">
          {children}
        </div>
      )}
    </li>
  );
}

function NavListItem({ children, to }) {
  return (
    <Link className="hover:bg-secondary-100/50 px-6 py-2 text-sm" to={to}>
      {children}
    </Link>
  );
}

function MoviesItems() {
  return (
    <NavList title="Movies">
      <NavListItem to={paths.popularPeople}>Popular</NavListItem>
      <NavListItem to={paths.popularPeople}>Now Playing</NavListItem>
      <NavListItem to={paths.popularPeople}>Upcoming</NavListItem>
      <NavListItem to={paths.popularPeople}>Top Rated</NavListItem>
    </NavList>
  );
}

function PeopleItems() {
  return (
    <NavList title="People">
      <NavListItem to={paths.popularPeople}>Popular People</NavListItem>
    </NavList>
  );
}

export default Header;
