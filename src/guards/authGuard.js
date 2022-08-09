import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from 'store/user/context';
 
const AuthGuard = ({ children }) => {
    const { user } = useContext(UserContext);

    if(!user) {
        return <Navigate to='/login' replace/> 
    }

    return children;
};
 
export default AuthGuard;
