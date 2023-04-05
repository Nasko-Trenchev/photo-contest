import { render, screen, fireEvent } from "@testing-library/react";
import Gallery from './Gallery';
import { UserProvider } from "../../contexts/UserContext";
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { BrowserRouter } from "react-router-dom";

// const categoryResponse = rest.get("http://localhost:3030/data/categories", (req, res, ctx) => {
//     return res(ctx.json([{
//         _ownerId: "0aa21a72-adea-47dd-9d4a-7b97de5ea7e2",
//         imageUrl: "https://images.pexels.com/photos/2922672/pexels-photo-2922672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//         name: "Animals",
//         _createdOn: 1680684812539,
//         _id: "e348f9d6-c64c-45da-b3b3-8b27ffc3e3fd"
//     }]))
// })
// const emptyResponse = rest.get("http://localhost:3030/data/categories", (req, res, ctx) => {
//     return res(ctx.status(404))
// })

// const handlers = [categoryResponse]

// const server = setupServer(...handlers);

// beforeAll(() => server.listen());
// afterEach(() => server.resetHandlers());
// afterAll(() => server.close());

describe('Gallery Component', () => {

    test("Button for joining contest is present", () => {
        render(
            <BrowserRouter>
                <Gallery />
            </BrowserRouter>
        );
        expect(screen.getByRole("button", { name: /Join/i })).toBeInTheDocument();
    });

  

});



