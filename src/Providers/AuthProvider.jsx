import { createContext, useState } from "react";
import PropTypes from 'prop-types'; // ES6
import {  createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../Firebase/Firebase.config";
export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)


    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const authinfo = {
        user,
        createUser
    }
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