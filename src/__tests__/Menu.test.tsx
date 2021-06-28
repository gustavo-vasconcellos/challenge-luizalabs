import { screen } from '@testing-library/react'
import React from 'react'
import Menu from '../header/Menu'
import { renderWithRouter } from '../test-utils'

describe('Menu', () => {
  it('renders', () => {
    renderWithRouter(<Menu />)

    expect(screen.getByTestId('header-menu')).toBeInTheDocument()
  })

  it('contains the correct text', () => {
    renderWithRouter(<Menu />)

    expect(screen.getByTestId('header-menu')).toHaveTextContent(
      'Central de Atendimento'
    )
    expect(screen.getByTestId('header-menu')).toHaveTextContent(
      'Lista de Desejos'
    )
  })
})
