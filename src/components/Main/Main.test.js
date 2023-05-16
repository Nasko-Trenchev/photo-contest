import { render, screen } from "@testing-library/react";
import Main from './Main';
import userEvent from '@testing-library/user-event'
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";

const categoryResponse = rest.get("http://localhost:3030/data/categories", (req, res, ctx) => {
    return res(ctx.json([{
        _ownerId: "0aa21a72-adea-47dd-9d4a-7b97de5ea7e2",
        imageUrl: "https://images.pexels.com/photos/2922672/pexels-photo-2922672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "Animals",
        _createdOn: 1680684812539,
        _id: "e348f9d6-c64c-45da-b3b3-8b27ffc3e3fd"
    }]))
})

const handlers = [categoryResponse]

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Main Component', () => {

    test("Photos is correct", async () => {
        render(
            <BrowserRouter>
            <Main />
            </BrowserRouter>
        );
        const testImage = await screen.findByAltText("Category");
        expect(testImage.src).toContain("https://images.pexels.com/photos/2922672/pexels-photo-2922672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
    });

    test("Select category appears", async () => {
        render(
            <BrowserRouter>
            <Main />
            </BrowserRouter>
        );
        const text = await screen.findByText("Select category to participate in:");
        expect(text).toBeInTheDocument();
    });

    test("Navigate to category", async () => {
        global.window = {location: {pathname: null}}
        const id = "e348f9d6-c64c-45da-b3b3-8b27ffc3e3fd";
        await act( async () =>  render(
            <BrowserRouter>
            <Main />
            </BrowserRouter>
        ));
        const button = await screen.findByRole("button", { name: /View/i })
        userEvent.click(button);
        expect(global.window.location.pathname).toContain(`/categories/${id}`)
    });   
});



