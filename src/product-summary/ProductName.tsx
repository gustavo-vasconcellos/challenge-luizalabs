import * as React from 'react'

interface ProductNameProps {
  name: string
}

const ProductName: React.FunctionComponent<ProductNameProps> = ({ name }) => {
  return <h3 className="fw5 tc f5">{name}</h3>
}

export default ProductName
