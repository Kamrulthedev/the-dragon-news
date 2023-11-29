import { useContext } from "react";
import PropTypes from 'prop-types'; // ES6
import { AuthContext } from "../../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const Privaterout = ({ children }) => {

    const { user, loding } = useContext(AuthContext)
    const location = useLocation()
    console.log(location.pathname)

    if(loding){
        return <span className="loading loading-spinner loading-md"></span>
    }
    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to={'/Login'}></Navigate>
};
Privaterout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Privaterout;