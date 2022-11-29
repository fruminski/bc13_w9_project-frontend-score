import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './Header.js';

test("Make sure the header displays", () => {
    render(<Header></Header>);
    //const h1 = screen.getAllByRole('heading', {level: 1})
    const h1 = screen.getByText("Live API");
    expect(h1).toContainHTML("Live API");
})

test('Check that the image renders correctly', () => {
    render(<Header></Header>);
    let img = screen.getAllByRole("img")

    expect(img).toEqual(
        expect.arrayContaining([
            expect.objectContaining({ 
                src: 'https://img.icons8.com/ios-filled/100/000000/engineering.png'
            })
        ])
    )
});

