import React from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

const Button = ({children, navigatee}) => {
  return (
    <div>
        <StyledButton onClick={() => navigatee(-1)}>{children}</StyledButton>
        <Outlet/>
    </div>
  )
}

export default Button

const StyledButton = styled.button`
    background-color: #3bb09b;
    border: 0;
    border-radius: 2rem;
    color: white;
    padding: 10px 20px;
    font-weight: 600;
    font-size: 1.2rem;
    margin-left: 32.4rem;
    margin-top: 1.6rem;
    cursor: pointer;
`