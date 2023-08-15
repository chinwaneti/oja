import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useSelector } from 'react-redux/es/hooks/useSelector';

export default function NavBar() {
  const cartProducts = useSelector(state => state.cart)
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand to="/" as={Link}>
          Oja
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
           
            <NavDropdown title="Links" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item to="/contact" as={Link}>Contact Us</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item to="/wallet" as={Link}>
  My Wallet
</NavDropdown.Item>
            </NavDropdown>
            </Nav>
            <Form className="d-flex " >
            <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
            </Form>
            </Navbar.Collapse>
            <span className="flex"   style={{marginRight:'50px'}} >
            <Nav.Link to='/cart' as={Link}>
            <AiOutlineShoppingCart /><p>my bag {cartProducts.length}</p>
            </Nav.Link>
            </span>
      
      </Container>
    </Navbar>
  );
}
