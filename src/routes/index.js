import { Routes, Route } from 'react-router-dom';

import Home from "../pages";
import LoginPage from "../pages/login";

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
