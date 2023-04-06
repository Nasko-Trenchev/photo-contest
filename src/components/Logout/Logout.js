import { useNavigate } from "react-router-dom";
import { useEffect, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

import { logout } from '../../services/AuthService';

export default function Logout() {
    const { user, userLogoutHandler } = useContext(UserContext)
    const navigate = useNavigate()

    useEffect(() => {
        logout(user.accessToken)
            .then(() => {
                userLogoutHandler();
                navigate("/");
            });
    }, [user.accessToken, userLogoutHandler, navigate])

    return null;
}