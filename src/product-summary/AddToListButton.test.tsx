import { LocalStorageMock } from '@react-mock/localstorage'
import { fireEvent, screen } from '@testing-library/react'
import React from 'react'
import AddToListButton from './AddToListButton'
import { mockProduct, renderWithRouter } from '../test-utils'
import ListProvider from '../wishlist/ListProvider'

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

  it('flows correctly to add and remove product from list', () => {
    renderButton()

    const button = screen.getByTestId('add-to-list-button')
    const clickOnButton = () =>
      fireEvent(
        button,
        new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
        })
      )

    expect(button).toBeInTheDocument()
    // Deve adicionar o produto no clique
    expect(button).toHaveProperty('title', 'Adicionar na lista')
    clickOnButton()

    // Deve remover o produto no clique e voltar ao estado inicial
    expect(button).toHaveProperty('title', 'Remover da lista')
    clickOnButton()

    expect(button).toHaveProperty('title', 'Adicionar na lista')
  })
})
