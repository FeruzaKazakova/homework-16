import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
  return (
    <Container>
        <Nav>
            <Logo>LOGO</Logo>
            <NavList>
                <li>
                    <NavLink to="/products" style={({isActive}) => ({
                                   color: isActive ? "black" : "white",
                                   background: isActive ? "#2990de" : "",
                                   textDecoration: isActive ? "none" : "none",
                                })
                            }>Products</NavLink>
                </li>
                <li>
                    <NavLink to="/myCart" style={({isActive}) => ({
                                   color: isActive ? "black" : "white",
                                   background: isActive ? "#2990de" : "",
                                   textDecoration: isActive ? "none" : "none",
                                })
                            }>My Cart</NavLink>
                </li>
                <li>
                    <NavLink to="/myOrders" style={({isActive}) => ({
                                   color: isActive ? "black" : "white",
                                   background: isActive ? "#2990de" : "",
                                   textDecoration: isActive ? "none" : "none",
                                })
                            }>My Orders</NavLink>
                </li>
            </NavList>
        </Nav>
    </Container>
  )
}

export default Header;

const Container = styled.div`
    background-color: #2990de;
    width: 100%;
    padding: 20px;
    nav{
        width: 100%;
    }
`
const NavList = styled.ul`
    list-style: none;
    display: flex;
    color: white;
    font-size: 20px;
    justify-content: flex-end;
    margin-right: 1.5rem;
    li{
        cursor: pointer;
        font-weight: 700;
        margin-right: 2.5rem;
    }
`
const Logo = styled.h2`
    color: white;
    margin-left: 1.5rem;
    display: inline;
`

const Nav= styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
`