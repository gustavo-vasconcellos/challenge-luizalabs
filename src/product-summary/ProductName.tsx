import * as React from 'react'

interface ProductNameProps {
  name: string
}

const ProductName: React.FunctionComponent<ProductNameProps> = ({ name }) => {
  return (
    <h3 data-testid="product-name" className="product-name fw5 tc f5">
      {name}
    </h3>
  )
}

export default ProductName
