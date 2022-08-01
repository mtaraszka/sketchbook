import { Routes, Route } from 'react-router-dom';

import LoginModule from '../pages/LoginModule';
import Home from '../pages/Home';

const AppRoutes = () => {
    return (
       <>
            <Routes>
                <Route 
                    path="/"
                    element={<Home/>}
                />
                <Route
                    path="login"
                    element={<LoginModule/>}
                />
            </Routes>
       </> 
    )
}

export default AppRoutes;
