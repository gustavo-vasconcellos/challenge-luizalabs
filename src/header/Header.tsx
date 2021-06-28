import React from 'react'
import Container from '../utils/Container'
import SearchBar from './SearchBar'
import Menu from './Menu'

const Header: React.FunctionComponent = () => {
  return (
    <div className="bg-purple white" data-testid="header">
      <Container>
        <div className="db dn-l mb1">
          <Menu />
        </div>
        <div className="flex-l items-start">
          <a href="/" className="white no-underline db mw4-l w-100 tc tl-l">
            <h1 className="fw6 f3-l f2 ma0 lh-copy">MagaNets</h1>
          </a>
          <div className="flex-grow-1 ">
            <div className="db-l dn">
              <Menu />
            </div>
            <div className="">
              <SearchBar />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Header
