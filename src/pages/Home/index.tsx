import { PublishAssetsForm } from "components/modules/forms/PublishAssets";
import { useLogin } from "hooks/useLogin";
import { useContext } from "react";
import { UserContext } from "store/user/context";

const Home = () => {
    const { user } = useContext(UserContext);
    const { logOut } = useLogin();

    return (
        <div>
            <h1>Welcome to homepage {user?.data.name}.</h1>
            <button onClick={logOut}>
                Logout
            </button>

            <PublishAssetsForm />
        </div>
    )
}

export default Home;
