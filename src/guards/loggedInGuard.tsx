import { FC } from 'react';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from 'store/user/context';

const LoggedInGuard: FC<{ children: JSX.Element }> = ({ children }) => {
    const { user } = useContext(UserContext);

    if (user) {
        return <Navigate to='/' replace />
    }

    return children;
};

export default LoggedInGuard;
