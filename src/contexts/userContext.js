import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useLocalStorage("user", {});

    const userLoginHandler = (userData) => {
        setUser(userData)
    }

    const userLogoutHandler = () => {
        setUser({});
    }

    return (
        <UserContext.Provider value={{
            user,
            userLoginHandler,
            userLogoutHandler,
            isAuthenticated: Boolean(user.accessToken)
        }}>
            {children}
        </UserContext.Provider>
    )
}