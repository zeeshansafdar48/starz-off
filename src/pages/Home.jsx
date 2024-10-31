import { Link } from "react-router-dom";

function App() {
  return (
    <div className="p-10">
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/popular-people"}>People</Link>
        </li>
      </ul>
    </div>
  );
}

export default App;
