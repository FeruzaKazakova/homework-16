import React from 'react'
import { useParams } from 'react-router-dom'
import { Card } from '../components/Card';

const ProductDetails = () => {
    const params = useParams()
    const prodId = params.id;

  return (
    <Card>
        <h3>Product Details page</h3>
    <div>Product Name {prodId} </div>
    </Card>
  )
}

export default ProductDetails;