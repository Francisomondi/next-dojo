import React from 'react'
import {useRouter} from 'next/router'

const reviewDetails = () => {

    const router =useRouter()
    const {productId,reviewId}= router.query
  return (
    <div>
    <h1>this will show review {reviewId} for product {productId}</h1>
    </div>
  )
}

export default reviewDetails