import { FaGoogle, FaGithub  } from "react-icons/fa6";

const RigthSideNav = () => {
    return (
        <div>
            <div className="p-4">
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
        </div>
    );
};

export default RigthSideNav;