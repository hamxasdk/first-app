import { useRouter } from 'next/router'
import React from 'react'

const ProductDetail = () => {
  const router = useRouter()
  const productId = router.query.productId
  return <div>ProductDetail about {productId}</div>
}

export default ProductDetail
