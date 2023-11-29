
import { Link } from "react-router-dom";
import Navber from "../../Sared/Navber/Navber";

const Register = () => {


    const handlerRegister = e =>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const img = form.get('img');
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password, img, name);
    }


    return (
        <div>
          <Navber></Navber>
          <div>
                <h1 className="text-4xl font-bold text-center mb-4">Register your account</h1>
                <form  onSubmit={handlerRegister} className="bg-gray-200	p-6 rounded-lg md:w-3/4 lg:w-1/2 mx-auto">
                    
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input type="name" placeholder="Enter your name" name="name" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="url" placeholder="Enter your photo url " name="img" className="input input-bordered" required />
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
                       
                    </div>

                    <div className="form-control mt-6">
                        <button type="submit" className="btn btn-primary">REGISTER</button>
                    </div>
                    <div className="text-center mt-4">
                        <h1>Alredy Have An Account ? <Link to={'/Login'}> <button className="btn btn-ghost text-orange-500">Login</button></Link></h1>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default Register;