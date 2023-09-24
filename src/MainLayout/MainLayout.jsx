import { Outlet } from "react-router-dom";
import NavBar from "../components/Header/NavBar";

const MainLayout = () => {
  return (
    <div className="static ">
      <header className="absolute  w-full">
        <NavBar></NavBar>
      </header>
      <div className=" w-full">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;
