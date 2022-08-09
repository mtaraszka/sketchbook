import { initialRegistrationValues } from "components/modules/forms/registerForm/register.constants"
import { useNavigate } from "react-router-dom"
import { singup } from "services/signup"
import { SignupInterface } from "types/user/interfaces"

export const useRegistration = () => {
    const navigate = useNavigate();

    const onSubmit = ({ name, email, password }: SignupInterface) => {
        singup(name, email, password)
            .then(() => navigate('/login'))
            .catch(() => alert('Registration unsuccessful'));
    }

    return { onSubmit, initialRegistrationValues }
}
