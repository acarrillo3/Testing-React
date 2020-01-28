import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import { getData as mockGetData } from '../api';
import StarWarsCharacters from './StarWarsCharacters';

//jest.mock("../api")

// button click tests
test("Previous button can be clicked", () => {
     const {queryByText} = render(<StarWarsCharacters />);
     const previousButton = queryByText(/previous/i);
     fireEvent.click(previousButton);
});

//  test("Next Renders New Data", async () => {
//      mockGetData.mockResolvedValue(initialData);
    
//      const { getByText } = render(<StarWarsCharacters />);
//      const previousButton = getByText(/Previous/i);
//      const nextButton = getByText(/Next/i);
//      mockGetData.mockResolvedValue(nextData);
//      await wait(() => fireEvent.click(nextButton));
//      await wait(() => expect(getByText("NEXT_NAME")));
//    });
//    test("Previous Renders New Data", async () => {
//      mockGetData.mockResolvedValue(initialData);
    
//      const { getByText } = render(<StarWarsCharacters />);
//      const previousButton = getByText(/Previous/i);
//      const nextButton = getByText(/Next/i);
//      mockGetData.mockResolvedValue(prevData);
//      await wait(() => fireEvent.click(previousButton));
//      await wait(() => expect(getByText("PREVIOUS_NAME")));
//    });

    test('test test', () => {});
