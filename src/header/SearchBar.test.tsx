import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import SearchBar from './SearchBar'

describe('SearchBar', () => {
  it('renders', () => {
    render(<SearchBar />)

    expect(screen.getByTestId('search-bar')).toBeInTheDocument()
    expect(screen.getByTestId('search-bar-input')).toBeInTheDocument()
  })

  it('inputs the correct text after write "something"', () => {
    render(<SearchBar />)

    const searchBar = screen.getByTestId('search-bar-input')

    expect(searchBar).toHaveProperty('value', '')
    fireEvent.change(searchBar, { target: { value: 'something' } })

    expect(searchBar).toHaveProperty('value', 'something')
  })
})
