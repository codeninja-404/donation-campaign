import { Outlet } from "react-router-dom";
import NavBar from "../components/Header/NavBar";


const MainLayout = () => {
    return (
        <div className="bg-green-500 container mx-auto px-2 lg:max-w-[1280px]">
            this is main layout
            <NavBar></NavBar>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;