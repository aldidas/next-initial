import { useState } from 'react'
import {
  Container,
  Collapse,
  Navbar,
  Nav,
  NavItem,
  NavLink,
  NavbarBrand,
  NavbarToggler
} from 'reactstrap'

const Header = ({ title = 'The Epic Title' }) => {
  const [ isOpen, setIsOpen ] = useState(false)
  return (
    <Navbar color="dark" dark fixed expand="md">
      <Container>
        <NavbarBrand href="/">{ title }</NavbarBrand> 
        <NavbarToggler onClick={ () => setIsOpen(!isOpen) }/>
        <Collapse isOpen={ isOpen } navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="#">Hello</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">World!</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
