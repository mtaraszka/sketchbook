import { useContext } from "react";
import { UserContext } from "store/user/context";
import { deleteAuthToken } from "utils/deleteAuthToken";
import { LoginForm } from "components/modules/forms/LoginForm";

const LoginModule = () => {
    const { user, setUser } = useContext(UserContext);

    return (
        <div>
            <h1>Welcome to login page {user?.data.name}</h1>
            {!user ? (
                <LoginForm />
            ) : (
                <button onClick={() => {
                    deleteAuthToken();
                    setUser(null);
                }}>
                    Logout
                </button>
            )}
        </div>
    )
}

export default LoginModule;
