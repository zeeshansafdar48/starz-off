import { Link } from "react-router-dom";

import { paths } from "../pages/routes";

function Header() {
  return (
    <div className="bg-primary-500 text-white px-16 py-5 h-16 font-semibold">
      <ul className="flex gap-10">
        <li>
          <Link to={paths.root}>Logo</Link>
        </li>
        <li>
          <Link to={paths.home}>Home</Link>
        </li>
        <li>
          <Link to={paths.popularPeople}>People</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
