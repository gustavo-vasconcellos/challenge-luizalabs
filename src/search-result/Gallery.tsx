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
      <div className="flex justify-center pv5 w-100 tc">
        <Loader type="Grid" color="#5a2d82" height="75" width="75" />
      </div>
    )
  }

  if (!products?.length) {
    return <div>error</div>
  }

  return (
    <div className="gallery">
      {products.map((product) => (
        <ProductSummary product={product} />
      ))}
    </div>
  )
}

export default Gallery
