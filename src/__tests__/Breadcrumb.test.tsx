import React from 'react'
import { screen } from '@testing-library/react'
import Breadcrumb from '../pages/Breadcrumb'
import { renderWithRouter } from '../test-utils'

describe('Breadcrumb', () => {
  it('renders', () => {
    renderWithRouter(<Breadcrumb />)

    expect(screen.getByTestId('breadcrumb')).toBeInTheDocument()
  })

  it('check if at Home page the content is "Home"', () => {
    renderWithRouter(<Breadcrumb />, { route: '/' })

    expect(screen.getByTestId('breadcrumb')).toHaveTextContent('Home')
  })

  it('check if at Wishlist page the content is "Home > lista de desejos"', () => {
    renderWithRouter(<Breadcrumb />, { route: '/lista-de-desejos' })

    expect(screen.getByTestId('breadcrumb')).toHaveTextContent(
      'Home > lista de desejos'
    )
  })
})
