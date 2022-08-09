import { useContext } from "react";
import { UserContext } from "store/user/context";
import { LoginForm } from "components/modules/forms/LoginForm";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const { user } = useContext(UserContext);
    const navigate = useNavigate();

    return (
        <div>
            <h1>Welcome to login page {user?.data.name}</h1>
            <LoginForm />
            {/* <button onClick={() => {
                deleteAuthToken();
                setUser(null);
            }}>
                Logout
            </button> */}
            <button onClick={() => navigate('/register')}>Register</button>
        </div>
    )
}

export default LoginPage;
