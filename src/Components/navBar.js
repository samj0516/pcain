'use client'
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
  display: flex;
  gap: 1rem;
`;


const StyledLink = styled.li`
  text-decoration: none;
  text-transform: uppercase;
  color: #777; /* Grey font color */
  transition: color 0.3s; /* Smooth color transition */
  
  &:hover {
    color: black; /* Black font color on hover */
  }
`;


const Navbar = () => {
  return (
    <Nav>
      <NavbarContainer>
        <HeadingContainer>
            <NavbarTitle>Paul Cain</NavbarTitle>
            <NavbarSubTitle>Video Production Portfolio</NavbarSubTitle>
        </HeadingContainer>
        <NavbarLinks>
        
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
    </Nav>
  );
};

export default Navbar;
