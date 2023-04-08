import { render, screen } from "@testing-library/react";
import Admin from './Admin';
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

describe('Admin Component', () => {

    test("Navigate on click", async () => {
        const user = { email: "admin@abv.bg" };
        global.window = {location: {pathname: null}}
        render(
            <BrowserRouter>
            <UserContext.Provider value={{ user }}>
            <Admin />
            </UserContext.Provider>
            </BrowserRouter>
        );
        const button = await screen.findByRole("button", { name: /Create/i })
        userEvent.click(button);
        expect(global.window.location.pathname).toContain(`/createCategory`)
    });
});



