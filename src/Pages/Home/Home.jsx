import Haeder from "../../Sared/Haeder/Haeder";
import LeftSideNav from "../../Sared/LeftSideNav/LeftSideNav";
import Navber from "../../Sared/Navber/Navber";
import RigthSideNav from "../../Sared/RigthSideNav/RigthSideNav";
import BrekingNews from "./BrekingNews";


const Home = () => {
    return (
        <div>

           <Haeder></Haeder>
           <BrekingNews></BrekingNews>
           <Navber></Navber>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div className="border-2">
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="lg:col-span-2 border-2">
                    <h1 className="text-4xl">
                        News is coming soon....
                    </h1>
                </div>
                <div className="border-2">
                    <RigthSideNav></RigthSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;