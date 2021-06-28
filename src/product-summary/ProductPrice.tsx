import * as React from 'react'

interface ProductPriceProps {
  price: number
  currencyFormat: string
}

const ProductPrice: React.FunctionComponent<ProductPriceProps> = ({
  price,
  currencyFormat,
}) => {
  return (
    <span>
      {currencyFormat}&nbsp;<span>{price.toFixed(2)}</span>
    </span>
  )
}

export default ProductPrice
