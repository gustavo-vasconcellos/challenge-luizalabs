import { render, screen } from '@testing-library/react'
import React from 'react'
import ProductName from './ProductName'
import { mockProduct } from '../test-utils'

describe('ProductName', () => {
  it('renders', () => {
    render(<ProductName name="Test" />)

    expect(screen.getByTestId('product-name')).toBeInTheDocument()
  })

  it('not contain the text prop "name" passed in the element', () => {
    render(<ProductName name="Wrong test" />)

    expect(screen.getByTestId('product-name')).not.toHaveTextContent('Test')
  })

  it('contain the text prop "name" passed in the element', () => {
    render(<ProductName name="Test" />)

    expect(screen.getByTestId('product-name')).toHaveTextContent('Test')
  })

  it('contain the text prop "name" passed in the element with mock', () => {
    render(<ProductName name={mockProduct.title} />)

    expect(screen.getByTestId('product-name')).toHaveTextContent(
      'Camisa Nike Corinthians I'
    )
  })
})
