import { screen } from '@testing-library/react'
import React from 'react'
import Gallery from './Gallery'
import { mockProducts, renderWithRouter } from '../test-utils'

describe('Gallery', () => {
  it('renders with products', () => {
    renderWithRouter(<Gallery products={mockProducts} isLoading={false} />)
    const productSummaryElements = document.querySelectorAll('.product-summary')

    expect(productSummaryElements.length).toBeGreaterThan(0)
    expect(screen.getByTestId('gallery')).toBeInTheDocument()
  })

  it('loads', () => {
    renderWithRouter(<Gallery products={[]} isLoading />)

    expect(screen.getByTestId('gallery-loading')).toBeInTheDocument()
  })

  it('get error message', () => {
    renderWithRouter(<Gallery products={[]} isLoading={false} />)

    expect(screen.getByTestId('gallery-error')).toBeInTheDocument()
    expect(screen.getByTestId('gallery-error')).toHaveTextContent(
      'Um erro aconteceu, tente novamente mais tarde'
    )

    const productSummaryElements = document.querySelectorAll('.product-summary')
    expect(productSummaryElements.length).toBe(0)
  })
})
