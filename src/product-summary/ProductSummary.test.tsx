import { screen } from '@testing-library/react'
import React from 'react'
import ProductSummary from './ProductSummary'
import { mockProduct, renderWithRouter } from '../test-utils'

describe('ProductSummary', () => {
  it('renders', () => {
    renderWithRouter(<ProductSummary product={mockProduct} />)

    expect(screen.getByTestId('product-name')).toBeInTheDocument()
  })

  it('contain each inner components', () => {
    renderWithRouter(<ProductSummary product={mockProduct} />)

    expect(screen.getByTestId('product-name')).toHaveTextContent(
      'Camisa Nike Corinthians I'
    )
    expect(screen.getByTestId('product-price')).toHaveTextContent('R$ 229.90')
    expect(screen.getByTestId('product-image')).toHaveProperty(
      'src',
      'https://via.placeholder.com/300x300'
    )
  })
})
