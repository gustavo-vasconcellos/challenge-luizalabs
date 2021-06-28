import * as React from 'react'
import { AiFillHeart, AiFillPhone } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import Location from './Location'

const Menu: React.FunctionComponent = () => {
  return (
    <div className="lh-copy flex justify-between" data-testid="header-menu">
      <div className="f5-l f6 lh-title lh-copy-l">
        <Location />
      </div>
      <div className="f5-l f6 lh-title lh-copy-l">
        <a
          className="white no-underline v-mid dib"
          href="https://atendimento.magazineluiza.com.br/hc/pt-br/"
        >
          <span className="dib v-mid">
            <AiFillPhone />
          </span>
          <span className="ml2 v-mid">Central de Atendimento</span>
        </a>
      </div>
      <div className="f5-l f6 lh-title lh-copy-l">
        <Link to="/lista-de-desejos" className="white no-underline v-mid dib">
          <span className="dib v-mid">
            <AiFillHeart />
          </span>
          <span className="ml2 v-mid">Lista de Desejos</span>
        </Link>
      </div>
    </div>
  )
}

export default Menu
