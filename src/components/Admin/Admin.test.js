import { render, screen } from "@testing-library/react";
import Admin from './Admin';
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from "react-router-dom";


describe('Admin Component', () => {

    test("Navigate on click", async () => {
        global.window = {location: {pathname: null}}
        render(
            <BrowserRouter>
            <Admin />
            </BrowserRouter>
        );
        await userEvent.click(screen.queryByText("Create category"));
        expect(global.window.location.pathname).toContain(`/createCategory`)
    });
});



