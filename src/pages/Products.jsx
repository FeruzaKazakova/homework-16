import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import {Card} from '../components/Card'

const Products = () => {
    const navigate = useNavigate()

    const productItems = [
        {
            id:1,
            title:"Product Name 1"
        },
        {
            id:2,
            title:"Product Name 2"
        }
    ];

  return (
    <div>
            <MainContainer>
            {productItems.map((product) => {
                return (
                <Card>
                    <ProductItemsContainer>
                        <h3 key={Math.random().toString()} id={product.id}>{product.title}</h3>
                <DetailsButton onClick={() => {navigate(`/products/${product.id}/details`)}}>Details</DetailsButton>
                </ProductItemsContainer>
                </Card>)
            })}
            
            </MainContainer>
    </div>
  )
}

export default Products;

const ProductItemsContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const DetailsButton = styled.button`
    background-color: #3bb09b;
    border: 0;
    border-radius: 2rem;
    color: white;
    padding: 10px 20px;
    font-weight: 600;
    cursor: pointer;
    font-size: 1rem;
`