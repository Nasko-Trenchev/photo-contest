import { useNavigate } from "react-router-dom";
import { useEffect, useContext } from "react";

import { userContext } from "../../contexts/userContext";
import * as authService from '../../services/AuthService';

export default function Logout()
{
    const {user, userLogoutHandler} = useContext(userContext)
    const navigate = useNavigate()

    useEffect(() => {
        authService.logout(user.accessToken)
        .then( () => {
            userLogoutHandler();
            navigate("/");
    })
    }, [])


    return null;
}