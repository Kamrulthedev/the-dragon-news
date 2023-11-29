import { Link } from "react-router-dom";
import Navber from "../../Sared/Navber/Navber";
import { AuthContext } from "../../Providers/AuthProvider";
import { useContext } from "react";
const Login = () => {

    const { singIn } = useContext(AuthContext)

    const hadlerLogin = e =>{

        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
          const email = form.get('email')
          const password = form.get('password')
        console.log(email, password);
        singIn(email, password)
        .then(result =>{
            console.log(result.user)
        })
        .catch(error =>console.log(error))
    }
    return (
        <div>
            <Navber></Navber>
            <div>
                <h1 className="text-4xl font-bold text-center mb-4">Please Login</h1>
                <form onSubmit={hadlerLogin} className="bg-gray-200	p-6 rounded-lg md:w-3/4 lg:w-1/2 mx-auto">
                    
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
                        <button type="submit" className="btn btn-primary">LOGIN</button>
                    </div>
                    <div className="text-center mt-4">
                        <h1>Dont’t Have An Account ? <Link to={'/Register'}> <button className="btn btn-ghost text-orange-500">Register</button></Link></h1>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default Login;