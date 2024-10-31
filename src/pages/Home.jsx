import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="my-0 mx-28">
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/popular-people"}>People</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export default App;
