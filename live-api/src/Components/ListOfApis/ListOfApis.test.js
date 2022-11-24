import ListOfApis from "./ListOfApis";
import {expect, test} from '@jest/globals'
import {screen, render} from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'

test('check that the number of li elements in ol is correct', () => {
    render(<ListOfApis apiArray={['a','b','e']}></ListOfApis>)
    let listItems = screen.getAllByRole('button')
    expect(listItems.length).toEqual(3)

}) 