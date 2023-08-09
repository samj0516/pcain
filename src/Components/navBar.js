'use client'
import Link from 'next/link';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: white;
  color: black;
  padding-bottom: 1rem;
`;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

const NavbarTitle = styled.h1`
  margin: 0;
  text-transform: uppercase;
`;

const NavbarSubTitle = styled.h1`
  margin: 0;
  text-transform: uppercase;
  color: #777;
`;

const NavbarLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 1rem;
`;

const NavbarLink = styled.li`
    text-decoration: none;
    color: #777; /* Grey font color */
    transition: color 0.3s; /* Smooth color transition */
    
    &:hover {
      color: black; /* Black font color on hover */
    }
  
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
        <div style={{display: 'flex', flexDirection: 'column'}}>
        <NavbarTitle>Paul Cain</NavbarTitle>
        <NavbarSubTitle>Video Production Portfolio</NavbarSubTitle>
        </div>
        <NavbarLinks>
          <NavbarLink>
            <Link href="/about" style={{textDecoration: 'none'}}>
              <StyledLink>About</StyledLink>
            </Link>
          </NavbarLink>
          <NavbarLink>
            <Link href="/contact" style={{textDecoration: 'none'}}>
              <StyledLink>Contact</StyledLink>
            </Link>
          </NavbarLink>
        </NavbarLinks>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
