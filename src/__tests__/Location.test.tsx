import React from 'react'
import { render, screen } from '@testing-library/react'
import Location from '../header/Location'

describe('Location', () => {
  it('renders', () => {
    render(<Location />)

    expect(screen.getByTestId('location')).toBeInTheDocument()
  })

  it('contains the correct text', () => {
    render(<Location />)

    expect(screen.getByTestId('location')).toHaveTextContent(
      'Cidade: São Paulo'
    )
  })
})
