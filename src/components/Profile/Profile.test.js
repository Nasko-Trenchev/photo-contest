import { render, screen } from "@testing-library/react";
import Profile from './Profile';
import { UserContext } from "../../contexts/UserContext";
import { BrowserRouter } from "react-router-dom";


describe('Profile Component', () => {

    test("Email is correct", () => {
        const user = { email: "Giorgio@abv.bg" };
        render(
            <BrowserRouter>
            <UserContext.Provider value={{ user }}>
                <Profile />
            </UserContext.Provider>
            </BrowserRouter>
        );
        expect(screen.getByText(`Email: ${user.email}`)).toBeInTheDocument();
    });

    test("Username is correct", () => {
        const user = { username: "Georgi", };
        render(
            <BrowserRouter>
            <UserContext.Provider value={{ user }}>
                <Profile />
            </UserContext.Provider>
            </BrowserRouter>
        );
        expect(screen.getByText(`Username: ${user.username}`)).toBeInTheDocument();
    });
});



