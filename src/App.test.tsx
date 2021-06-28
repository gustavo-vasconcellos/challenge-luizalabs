import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders logo at header', () => {
  render(<App />)
  const linkElement = screen.getByText(/MagaNets/i)
  expect(linkElement).toBeInTheDocument()
})
