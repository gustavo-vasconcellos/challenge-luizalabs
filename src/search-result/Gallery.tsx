import * as React from 'react'
import Loader from 'react-loader-spinner'
import ProductSummary from '../product-summary/ProductSummary'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

interface GalleryProps {
  products: Product[]
  isLoading: boolean
}

const Gallery: React.FunctionComponent<GalleryProps> = ({
  isLoading,
  products,
}) => {
  if (isLoading) {
    return (
      <div data-testid="gallery" className="flex justify-center pv5 w-100 tc">
        <Loader type="Grid" color="#5a2d82" height="75" width="75" />
      </div>
    )
  }

  if (!products?.length) {
    return <div data-testid="gallery">error</div>
  }

  return (
    <div className="gallery" data-testid="gallery">
      {products.map((product) => (
        <ProductSummary key={product.sku} product={product} />
      ))}
    </div>
  )
}

export default Gallery
