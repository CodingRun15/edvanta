import  React from 'react';
import { useAuth } from '../Context/AuthContext';
import { Navigate } from 'react-router-dom';
// eslint-disable-next-line react/prop-types
function PrivateRoute({element}){
    const {isLoggedIn} = useAuth();
    return(
        isLoggedIn?(
        element
    ):(
        <Navigate to='/' />
    )
    )
}
export default PrivateRoute;