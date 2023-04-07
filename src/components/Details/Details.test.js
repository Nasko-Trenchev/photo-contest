import { render, screen } from "@testing-library/react";
import { UserContext } from "../../contexts/UserContext";
import { AlertContext } from "../../contexts/AlertContext";
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { BrowserRouter } from "react-router-dom";

import Router from 'react-router';
import userEvent from '@testing-library/user-event'
import Details from './Details';

jest.mock('react-router', () => ({
    ...jest.requireActual('react-router'),
    useParams: jest.fn(),
}));


const photoResponse = rest.get("http://localhost:3030/data/photos", (req, res, ctx) => {
    return res(ctx.json([{
        categoryId: "49eb9b41-36a2-4997-a6f8-4b62e06f072c",
        name: "Trees",
        imageUrl: "https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Couple of trees",
        _createdOn: 1680684855968,
        _ownerId: "0aa21a72-adea-47dd-9d4a-7b97de5ea7e2",
        _updatedOn: 1680684884388,
        _id: "4091cada-e310-4b28-a2db-7d7aec7065ae"
    }]))
})

const handlers = [photoResponse]

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Details Component', () => {

    test("Photo is appearing on the screen", async () => {
        jest.spyOn(Router, 'useParams').mockReturnValue({ photoId: '4091cada-e310-4b28-a2db-7d7aec7065ae'});
        const user = { email: "Giorgio@abv.bg" };
        const isAuthenticated = true;
        const setAlertState = { show: false, message: '' }
        render(
            <BrowserRouter>
                <AlertContext.Provider value={{ setAlertState }}>
                    <UserContext.Provider value={{ user, isAuthenticated }}>
                        <Details />
                    </UserContext.Provider>
                </AlertContext.Provider>
            </BrowserRouter>
        );
        // const testImage = document.querySelector("img");
        // expect(testImage.src).toContain("https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
        const image = await screen.findByAltText("Details");
        expect(image).toBeInTheDocument();
    });

    // test("Navigate to edit", async () => {
    //     jest.spyOn(Router, 'useParams').mockReturnValue({ photoId: '4091cada-e310-4b28-a2db-7d7aec7065ae' });
    //     global.window = { location: { pathname: null } }
    //     const id = "4091cada-e310-4b28-a2db-7d7aec7065ae";
    //     const user = { email: "Giorgio@abv.bg", _id: "0aa21a72-adea-47dd-9d4a-7b97de5ea7e2"};
    //     const isAuthenticated = true;
    //     const setAlertState = { show: false, message: '' }
    //     render(
    //         <BrowserRouter>
    //             <AlertContext.Provider value={{ setAlertState }}>
    //                 <UserContext.Provider value={{ user, isAuthenticated }}>
    //                     <Details />
    //                 </UserContext.Provider>
    //             </AlertContext.Provider>
    //         </BrowserRouter>
    //     );
    //     const button = await screen.findByRole("button", { name: /Edit/i })
    //     userEvent.click(button);
    //     expect(global.window.location.pathname).toContain(`/edit/${id}`)
    // });

});



