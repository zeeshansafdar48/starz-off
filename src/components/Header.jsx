import { Link } from "react-router-dom";

import { paths } from "../pages/routes";

function Header() {
  return (
    <div className="bg-primary-500 text-white">
      <ul>
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
