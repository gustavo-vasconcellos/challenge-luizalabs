import * as React from 'react'
import { RouteProps } from 'react-router-dom'
import Gallery from '../search-result/Gallery'
import { useList } from '../wishlist/ListProvider'

const WishlistPage: React.FunctionComponent<RouteProps> = () => {
  const { items } = useList()

  return (
    <div>
      <Gallery products={items} isLoading={false} />
    </div>
  )
}

export default WishlistPage
