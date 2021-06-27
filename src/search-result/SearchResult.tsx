import React, { useEffect, useState } from 'react'
import Gallery from './Gallery'

const SearchResult: React.FunctionComponent = () => {
  const [products, setProducts] = useState([])
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://run.mocky.io/v3/66063904-d43c-49ed-9329-d69ad44b885e')
      .then((response) => response.json())
      .then((data) => {
        if (data?.products?.length) {
          setProducts(data.products)
        }

        setLoading(false)
      })
  }, [])

  return (
    <div>
      <Gallery products={products} isLoading={isLoading} />
    </div>
  )
}

export default SearchResult
