import { FaGoogle, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa6";
import { AiFillTwitterCircle } from "react-icons/ai";
     import qzone1 from "../../assets/qZone1.png";
     import qzone2 from "../../assets/qZone2.png";
     import qzone3 from "../../assets/qZone3.png";
     import bg1 from "../../assets/bg.png";

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
                <h2 className="text-2xl font-bold mb-6">Find Us On</h2>
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

            <div className="p-4 mb-4 bg-gray-100	">
                <h2 className="text-2xl font-bold mb-6">Q-Zone</h2>
             <img className="mb-3" src={qzone1} alt="" />
             <img className="mb-3" src={qzone2} alt="" />
             <img src={qzone3} alt="" />
            
            </div>
            <div className="bg-cover p-12  bg-center" style={{ backgroundImage: `url(${bg1}` }}>
                <h1 className="text-4xl mb-4 font-bold text-center text-white ">Create an 
                   <br  /> Amazing
                   <br /> Newspaper</h1>
                   <p className="text-center mb-4 text-white">Discover thousands of <br /> options, easy to <br /> customize layouts, one- <br /> click to import demo <br /> and much more.</p>
                  <div className="flex justify-center">
                  <button className="btn btn-secondary mb-8">Learn More</button>
                  </div>
            </div>
        </div>
    );
};

export default RigthSideNav;