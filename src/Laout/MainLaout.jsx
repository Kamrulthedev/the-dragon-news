import { Outlet } from "react-router-dom";
const MainLaout = () => {
    return (
        <div className="max-w-[1100px] mx-auto">
            <Outlet></Outlet>
        </div>
    );
};

export default MainLaout;