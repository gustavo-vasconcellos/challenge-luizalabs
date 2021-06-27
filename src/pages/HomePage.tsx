import * as React from 'react'
import { RouteProps } from 'react-router-dom'
import SearchResult from '../search-result/SearchResult'

const HomePage: React.FunctionComponent<RouteProps> = () => {
  return (
    <div>
      <SearchResult />
    </div>
  )
}

export default HomePage
