import { Routes, Route } from 'react-router-dom';

import Home from 'pages/Home';
import LoginPage from 'pages/LoginPage';
import AuthGuard from 'guards/authGuard';
import RegisterPage from 'pages/RegisterPage';
import LoggedInGuard from 'guards/loggedInGuard';

const AppRoutes = () => {
    return (
       <>
            <Routes>
                <Route 
                    path="/"
                    element={
                        <AuthGuard>
                            <Home/>
                        </AuthGuard>
                    }
                />
                <Route
                    path="login"
                    element={
                        <LoggedInGuard>
                            <LoginPage/>
                        </LoggedInGuard>
                    }
                />

                <Route
                    path="register"
                    element={<RegisterPage/>}
                />
            </Routes>
       </> 
    )
}

export default AppRoutes;
