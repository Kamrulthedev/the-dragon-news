import { Link } from "react-router-dom";
import Navber from "../../Sared/Navber/Navber";

const Register = () => {
    return (
        <div>
          <Navber></Navber>
          <div>
                <h1 className="text-4xl font-bold text-center mb-4">Register your account</h1>
                <form  className="bg-gray-200	p-6 rounded-lg md:w-3/4 lg:w-1/2 mx-auto">
                    
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input type="name" placeholder="Enter your name" name="name" className="input input-bordered" required />
                    </div>
                    
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email address</span>
                        </label>
                        <input type="Email" placeholder="Enter your email address" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="Password" placeholder="Enter your password" name="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>

                    <div className="form-control mt-6">
                        <button type="submit" className="btn btn-primary">Login</button>
                    </div>
                    

                </form>
            </div>
        </div>
    );
};

export default Register;