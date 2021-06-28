import React from 'react'
import { FaHeart } from 'react-icons/fa'
import { ImCross } from 'react-icons/im'
import { useLocation } from 'react-router-dom'
import { useList } from '../wishlist/ListProvider'

interface AddToListButtonProps {
  product: Product
}

const AddToListButton: React.FunctionComponent<AddToListButtonProps> = ({
  product,
}) => {
  const { addOrRemoveItem, isAdded } = useList(product.sku)
  const location = useLocation()
  const isWishlistPage = location.pathname.indexOf('lista-de-desejos') !== -1

  return (
    <div
      data-testid="add-to-list-button"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.keyCode === 13 || event.key === '13') {
          addOrRemoveItem(product)
        }
      }}
      onClick={() => addOrRemoveItem(product)}
      role="button"
      className={`${isAdded ? 'red' : 'white'} ${
        isWishlistPage ? 'remove' : ''
      } absolute add-to-list-button flex items-center justify-center pointer`}
      title={isAdded ? 'Remover da lista' : 'Adicionar na lista'}
    >
      {isWishlistPage ? <ImCross /> : <FaHeart />}
    </div>
  )
}

export default AddToListButton
