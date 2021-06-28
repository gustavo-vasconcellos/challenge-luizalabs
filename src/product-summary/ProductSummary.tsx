import * as React from 'react'
import AddToListButton from './AddToListButton'
import ProductImage from './ProductImage'
import ProductName from './ProductName'
import ProductPrice from './ProductPrice'

interface ProductSummaryProps {
  product: Product
}

const ProductSummary: React.FunctionComponent<ProductSummaryProps> = ({
  product,
}) => {
  return (
    <div
      className="pa3 relative br2 b--black-30 ba mb4-l mb3"
      data-testid="product-summary"
    >
      <AddToListButton product={product} />
      <div className="tc">
        <ProductImage src={product.image} alt={product.title} />
      </div>
      <ProductName name={product.title} />
      <div className="fw5 yellow tc pv4">
        <ProductPrice
          price={product.price}
          currencyFormat={product.currencyFormat}
        />
      </div>
    </div>
  )
}

export default ProductSummary
