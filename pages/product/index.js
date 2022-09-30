import Link from 'next/link'
import React from 'react'

const Product = ({ productId = 100 }) => {
  return (
    <>
      <Link href="/">Home</Link>
      <h1>
        {' '}
        <Link href={`/product/${productId}`}> Product 1</Link>
      </h1>
      <h1>
        <Link href="/product/2"> Product 2</Link>
      </h1>
      <h1>
        <Link href="/product/3" replace>
          Product 3{/* <a>Product 3</a> */}
        </Link>
      </h1>
    </>
  )
}

export default Product
