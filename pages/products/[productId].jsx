import React from 'react'
import {useRouter} from 'next/router'

const productDetails = () => {
    const router = useRouter()
    const productId = router.query.productId
  return (
    <div>this is the details on a {productId}</div>
  )
}

export default productDetails