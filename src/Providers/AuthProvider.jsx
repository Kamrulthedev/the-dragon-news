import { createContext } from "react";
import PropTypes from 'prop-types'; // ES6

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const authinfo = {}


    return (
        <AuthContext.Provider value={authinfo}>
         {children}
        </AuthContext.Provider>
            
     
    );
};
AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

export default AuthProvider;