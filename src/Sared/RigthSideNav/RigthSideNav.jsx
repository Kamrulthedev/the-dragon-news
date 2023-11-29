import { FaGoogle, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa6";
import { AiFillTwitterCircle } from "react-icons/ai";
     import qzone1 from "../../assets/qZone1.png";
     import qzone2 from "../../assets/qZone2.png";
     import qzone3 from "../../assets/qZone3.png";

const RigthSideNav = () => {
    return (
        <div>
            {/* Login With */}
            <div className="p-4 mb-4 ">
                <h2 className="text-2xl font-bold">Login with</h2>
                <button className="btn btn-outline w-full mt-6">
                    <FaGoogle></FaGoogle>
                    Login with Google
                </button>
                <button className="btn btn-outline w-full mt-4">
                    <FaGithub></FaGithub>
                    Login with Github
                </button>
            </div>
            {/* Find Us on */}
            <div className="p-4 mb-2">
                <h2 className="text-2xl font-bold">Find Us On</h2>
                <a className="flex p-4 text-lg items-center border-2 rounded-t-lg" href="">
                    <FaFacebook className="mr-2"></FaFacebook >
                    Facebook</a>
                <a className="flex p-4 border-x-2 text-lg items-center" href="">
                    <AiFillTwitterCircle className="mr-2"></AiFillTwitterCircle >
                    Twitter</a>
                <a className="flex p-4 text-lg items-center border-2 rounded-b-lg" href="">
                    <FaInstagram className="mr-2"></FaInstagram>
                    Instagram</a>


            </div>
            {/* Q Zone  */}

            <div className="p-4 mb-4 ">
                <h2 className="text-2xl font-bold mb-6">Q-Zone</h2>
             <img className="mb-3" src={qzone1} alt="" />
             <img className="mb-3" src={qzone2} alt="" />
             <img src={qzone3} alt="" />
            
            </div>
        </div>
    );
};

export default RigthSideNav;