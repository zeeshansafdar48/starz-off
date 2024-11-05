import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function Layout() {
  return (
    <>
      <Header />
      <div className="px-24">
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
