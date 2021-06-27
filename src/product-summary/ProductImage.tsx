import * as React from 'react'

interface ProductImageProps {
  src: string
  alt: string
}

const ProductImage: React.FunctionComponent<ProductImageProps> = ({
  src,
  alt,
}) => {
  return <img src={src} alt={alt} className="product-image w-100 h-100" />
}

export default ProductImage