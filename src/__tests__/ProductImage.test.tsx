import { render, screen } from '@testing-library/react'
import React from 'react'
import ProductImage from '../product-summary/ProductImage'
import { mockProduct } from '../test-utils'

describe('ProductImage', () => {
  it('renders', () => {
    render(<ProductImage src="" alt="" />)

    expect(screen.getByTestId('product-image')).toBeInTheDocument()
  })

  it('have a image with correct "src" and "alt" attributes', () => {
    render(<ProductImage src="/test" alt="test" />)

    expect(screen.getByTestId('product-image')).toHaveProperty(
      'src',
      'http://localhost/test'
    )
    expect(screen.getByTestId('product-image')).toHaveProperty('alt', 'test')
  })

  it('have a image with correct "src" and "alt" attributes with mock', () => {
    render(<ProductImage src={mockProduct.image} alt={mockProduct.title} />)

    expect(screen.getByTestId('product-image')).toHaveProperty(
      'src',
      'https://via.placeholder.com/300x300'
    )
    expect(screen.getByTestId('product-image')).toHaveProperty(
      'alt',
      'Camisa Nike Corinthians I'
    )
  })
})
