import { Outlet } from "react-router";
import { NavBar } from "./components/navBar";

function AppLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default AppLayout;
