import * as React from 'react'

interface ProductPriceProps {
  price: number
}

const ProductPrice: React.FunctionComponent<ProductPriceProps> = ({
  price,
}) => {
  return (
    <span>
      R$&nbsp;<span>{price.toFixed(2)}</span>
    </span>
  )
}

export default ProductPrice
