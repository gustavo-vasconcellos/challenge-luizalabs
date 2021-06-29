import { LocalStorageMock } from '@react-mock/localstorage'
import { screen } from '@testing-library/react'
import React from 'react'
import AddToListButton from '../product-summary/AddToListButton'
import { renderWithRouter } from '../test-utils'
import ListProvider from '../wishlist/ListProvider'

const mockProduct: Product = {
  id: 0,
  sku: 8552515751438644,
  title: 'Camisa Nike Corinthians I',
  description: '14/15 s/nº',
  availableSizes: {
    S: 100,
    G: 5,
    GG: 120,
    GGG: 12,
  },
  style: 'Branco com listras pretas',
  price: 229.9,
  installments: 9,
  currencyId: 'BRL',
  currencyFormat: 'R$',
  isFreeShipping: true,
  image: 'https://via.placeholder.com/300x300',
}

const renderButton = (isAdded?: boolean) =>
  renderWithRouter(
    <LocalStorageMock
      items={{ maganets_list: isAdded ? JSON.stringify([mockProduct]) : '' }}
    >
      <ListProvider>
        <AddToListButton product={mockProduct} />
      </ListProvider>
    </LocalStorageMock>
  )

describe('AddToListButton', () => {
  it('renders', () => {
    renderButton()

    expect(screen.getByTestId('add-to-list-button')).toBeInTheDocument()
  })

  it('the product is added and the title is "Remover da lista"', () => {
    renderButton(true)

    expect(screen.getByTestId('add-to-list-button')).toHaveProperty(
      'title',
      'Remover da lista'
    )
  })

  it('the product is not added and the title is "Adicionar na lista"', () => {
    renderButton()

    expect(screen.getByTestId('add-to-list-button')).toHaveProperty(
      'title',
      'Adicionar na lista'
    )
  })
})
