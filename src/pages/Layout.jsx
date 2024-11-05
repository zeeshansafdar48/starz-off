import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function Layout() {
  return (
    <div className="my-0 mx-28">
      <Header />
      <Outlet />
    </div>
  );
}

export default Layout;
