import React from 'react'
import {useRouter} from 'next/router'

const productDetails = () => {
    const router = useRouter()
    const productId = router.query.productId
  return (
    <div>
    <h1>This is the details of a product || {productId}</h1>
    </div>
  )
}

export default productDetails