import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'
import Header from './header/Header'
import Breadcrumb from './pages/Breadcrumb'
import HomePage from './pages/HomePage'
import WishlistPage from './pages/WishlistPage'
import Container from './utils/Container'

const App: React.FunctionComponent = () => {
  return (
    <BrowserRouter forceRefresh={false}>
      <Header />
      <Container>
        <Breadcrumb />
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/lista-de-desejos">
          <WishlistPage />
        </Route>
      </Container>
    </BrowserRouter>
  )
}

export default App
