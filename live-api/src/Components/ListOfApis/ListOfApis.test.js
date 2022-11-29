import ListOfApis from "./ListOfApis";
import {expect, test} from '@jest/globals'
import {screen, render} from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'

test('check that the number of li elements in ol is correct', () => {

    let myprops = [{
        id: 20002,
        apiName: "a",
        apiUrl: "http://www.google.com",
        json: "{}"
    },
    {
        id: 20003,
        apiName: "b",
        apiUrl: "http://www.boogle.com",
        json: "{}"
    },
    {
        id: 20003,
        apiName: "c",
        apiUrl: "http://www.moogle.com",
        json: "{}"
    }];

    render(<ListOfApis apiArray={myprops}></ListOfApis>)
    let listItems = screen.getAllByRole('button')
    // Needs to be 9 because 3xentries means 3x delete, 3x "Show" and 3x Documents buttons
    expect(listItems.length).toEqual(9)
});

