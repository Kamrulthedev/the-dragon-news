import Navber from "../../Sared/Navber/Navber";


const Login = () => {
    return (
        <div>
            <Navber></Navber>
           <div>
           <h1 className="text-4xl font-bold my-10">Please Login</h1>
            <form>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="Name" placeholder="Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="Email" placeholder="Email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="Password" placeholder="Password" className="input input-bordered" required />
                </div>
            </form>
           </div>
        </div>
    );
};

export default Login;