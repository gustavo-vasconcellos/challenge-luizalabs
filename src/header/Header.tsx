import React from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import Location from './Location'
import SearchBar from './SearchBar'

const Header: React.FunctionComponent = () => {
  return (
    <div className="flex itens-start">
      <div className="">
        <h1 className="fw6 f2">MagaNets</h1>
      </div>
      <div className="flex-grow-1">
        <div className="">
          <Location />
          <div className="">
            <a href="https://atendimento.magazineluiza.com.br/hc/pt-br/">
              Central de Atendimento
            </a>
          </div>
          <div className="">
            <Link to="/wishlist">
              <AiFillHeart />
              <span>Lista de Desejos</span>
            </Link>
          </div>
        </div>
        <div className="">
          <SearchBar />
        </div>
      </div>
    </div>
  )
}

export default Header
