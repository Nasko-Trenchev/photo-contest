import { render, screen } from "@testing-library/react";
import Profile from './Profile';
import { UserContext } from "../../contexts/UserContext";

describe('Profile Component', () => {

    test("Email is correct", () => {
        const user = { email: "Giorgio@abv.bg" };
        render(
            <UserContext.Provider value={{user}}>
                <Profile />
            </UserContext.Provider>
        );
        expect(screen.getByText(`Email: ${user.email}`)).toBeInTheDocument();
    });

    test("Username is correct", () => {
        const user = { username: "Georgi" };
        render(
            <UserContext.Provider value={{user}}>
                <Profile />
            </UserContext.Provider>
        );
        expect(screen.getByText(`Username: ${user.username}`)).toBeInTheDocument();
    });
});



