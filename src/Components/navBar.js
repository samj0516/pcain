'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: white;
  color: black;
  padding-bottom: 1rem;
  padding-left: 20px;
  padding-right: 20px;
`;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;
const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
 
`;
const NavbarTitle = styled.h1`
  margin: 0;
  text-transform: uppercase;
`;

const NavbarSubTitle = styled.h2`
  margin: 0;
  text-transform: uppercase;
  color: #777;
`;

const NavbarLinks = styled.ul`
  list-style: none;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};

  @media (min-width: 768px) {
    display: flex;
    gap: 1rem;
    align-items: center;
  }
`;

const MobileMenuButton = styled.button`
  display: block;
  @media (min-width: 768px) {
    display: none;
  }
`;
const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  flex-direction: column;
  z-index: 1000;
  text-align: center; 
  padding-top: 2rem; 
`;
const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  cursor: pointer;
`;

const CloseIcon = styled.svg`
  width: 25px;
  height: 25px;
  fill: black;
`;

const StyledLink = styled.li`
  list-style: none;
  text-decoration: none;
  text-transform: uppercase;
  color: #777; /* Grey font color */
  transition: color 0.3s; /* Smooth color transition */
  
  &:hover {
    color: black; /* Black font color on hover */
  }
`;

const StyledMobileLink = styled.a`
  list-style: none;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 1.5rem; /* Adjust the font size */
  color: #777; /* Grey font color */
  margin-bottom: 1rem; /* Add spacing between the links */
  transition: color 0.3s; /* Smooth color transition */
  
  &:hover {
    color: black; /* Black font color on hover */
  }
`;


const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

    return (
    <Nav>
      <NavbarContainer>
        <HeadingContainer>
            <NavbarTitle>Paul Cain</NavbarTitle>
            <NavbarSubTitle>Video Production Portfolio</NavbarSubTitle>
        </HeadingContainer>
        <MobileMenuButton onClick={toggleMobileMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </MobileMenuButton>
        <NavbarLinks isOpen={isMobileMenuOpen}>
        
            <Link href="/" style={{textDecoration: 'none'}}>
              <StyledLink>Work</StyledLink>
            </Link>
         
         
            <Link href="/about" style={{textDecoration: 'none'}}>
              <StyledLink>About</StyledLink>
            </Link>
         
            <Link href="/contact" style={{textDecoration: 'none'}}>
              <StyledLink>Contact</StyledLink>
            </Link>
        
        </NavbarLinks>
        
      </NavbarContainer>
      <MobileMenu isOpen={isMobileMenuOpen}>
      <CloseButton onClick={toggleMobileMenu}>
          <CloseIcon
             xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          
          
          </CloseIcon>
        </CloseButton>
            <Link href="/" style={{textDecoration: 'none'}} onClick={toggleMobileMenu}>
              <StyledMobileLink>Work</StyledMobileLink>
            </Link>
            
         
            <Link href="/about" style={{textDecoration: 'none'}} onClick={toggleMobileMenu}>
              <StyledMobileLink>About</StyledMobileLink>
            </Link>
         
            <Link href="/contact" style={{textDecoration: 'none'}} onClick={toggleMobileMenu}>
              <StyledMobileLink>Contact</StyledMobileLink>
            </Link>
      </MobileMenu>
    </Nav>
  );
};

export default Navbar;

