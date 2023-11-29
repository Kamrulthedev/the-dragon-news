import Haeder from "../../Sared/Haeder/Haeder";
import LeftSideNav from "../../Sared/LeftSideNav/LeftSideNav";
import Navber from "../../Sared/Navber/Navber";
import RigthSideNav from "../../Sared/RigthSideNav/RigthSideNav";
import BrekingNews from "./BrekingNews";
import MainHome from "./MainHome";


const Home = () => {
    return (
        <div>

           <Haeder></Haeder>
           <BrekingNews></BrekingNews>
           <Navber></Navber>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div className="">
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="lg:col-span-2 ">
                    <MainHome></MainHome>
                </div>
                <div className="">
                    <RigthSideNav></RigthSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;