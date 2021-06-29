import { render, screen } from '@testing-library/react'
import React from 'react'
import ProductPrice from './ProductPrice'
import { mockProduct } from '../test-utils'

describe('ProductPrice', () => {
  it('renders', () => {
    render(<ProductPrice price={1} currencyFormat="$" />)

    expect(screen.getByTestId('product-price')).toBeInTheDocument()
  })

  it('contain USD as currency value', () => {
    render(<ProductPrice price={1} currencyFormat="$" />)

    expect(screen.getByTestId('product-price')).toHaveTextContent('$ 1.00')
  })

  it('contain BRL as currency value', () => {
    render(<ProductPrice price={1} currencyFormat="R$" />)

    expect(screen.getByTestId('product-price')).toHaveTextContent('R$ 1.00')
  })

  it('contain correct mocked value', () => {
    render(<ProductPrice price={mockProduct.price} currencyFormat="R$" />)

    expect(screen.getByTestId('product-price')).toHaveTextContent('R$ 229.90')
  })
})
