import { render, screen } from "@testing-library/react";
import MostLikedPhotos from './MostLikedPhotos';
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from "react-router-dom";

describe('AllPhotos Component', () => {

    test("Photos count is correct", async () => {
        const photos = [
            {
                categoryId: "49eb9b41-36a2-4997-a6f8-4b62e06f072c",
                name: "Trees",
                imageUrl: "https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                description: "Couple of trees",
                _createdOn: 1680684855968,
                _ownerId: "0aa21a72-adea-47dd-9d4a-7b97de5ea7e2",
                _updatedOn: 1680684884388,
                _id: "4091cada-e310-4b28-a2db-7d7aec7065ae"
            },
        ]
        render(
            <BrowserRouter>
                <MostLikedPhotos data={photos} />
            </BrowserRouter>
        );
        const image = await screen.findByAltText("Top pictures");
        expect(image).toBeInTheDocument();
    });

    test("Navigate to photo", async () => {
        global.window = { location: { pathname: null } }
        const photo =
        {
            categoryId: "49eb9b41-36a2-4997-a6f8-4b62e06f072c",
            name: "Trees",
            imageUrl: "https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            description: "Couple of trees",
            _createdOn: 1680684855968,
            _ownerId: "0aa21a72-adea-47dd-9d4a-7b97de5ea7e2",
            _updatedOn: 1680684884388,
            _id: "4091cada-e310-4b28-a2db-7d7aec7065ae"
        }
        const id = "4091cada-e310-4b28-a2db-7d7aec7065ae";
        render(
            <BrowserRouter>
                <MostLikedPhotos data={photo} />
            </BrowserRouter>
        );
        const button = await screen.findByRole("button", { name: /See/i })
        userEvent.click(button);
        expect(global.window.location.pathname).toContain(`/photos/${id}`)
    });

});


