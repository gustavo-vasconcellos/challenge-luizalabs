import React from 'react'
import { FaHeart } from 'react-icons/fa'
import { useList } from '../wishlist/ListProvider'

interface AddToListButtonProps {
  product: Product
}

const AddToListButton: React.FunctionComponent<AddToListButtonProps> = ({
  product,
}) => {
  const { addOrRemoveItem, isAdded } = useList(product.sku)

  return (
    <div
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.keyCode === 13 || event.key === '13') {
          addOrRemoveItem(product)
        }
      }}
      onClick={() => addOrRemoveItem(product)}
      role="button"
      className={`${
        isAdded ? 'red' : 'white'
      } add-list-button flex items-center justify-center pointer`}
    >
      <FaHeart />
    </div>
  )
}

export default AddToListButton
