import { Routes, Route } from 'react-router-dom';

import Home from 'pages/Home';
import LoginPage from 'pages/LoginPage';

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
                    element={<LoginPage/>}
                />
            </Routes>
       </> 
    )
}

export default AppRoutes;
