import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BsBagCheck } from 'react-icons/bs';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useSelector } from 'react-redux';

export default function NavBar() {
  const cartProducts = useSelector(state => state.cart);
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    filterProducts();
  }, [searchQuery]);

  const fetchProducts = () => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  };

  const filterProducts = () => {
    const filteredProducts = products.filter(product =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filteredProducts);
  };

  return (
    <Navbar expand="lg" style={{ position: 'fixed', width: '100%', top: 0, zIndex: 1000 }} className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand to="/" as={Link} style={{ fontSize: '2.5rem', marginLeft: '30px', color: 'hotpink' }}>
          Oja
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="mx-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <NavDropdown title="Links" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item to="/contact" as={Link}>
                Contact Us
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex position-relative" style={{ width: '100%', maxWidth: '300px', marginRight: '80px' }}>
            <Form.Control
              type="search"
              placeholder="Search on Oja"
              className="me-2"
              aria-label="Search"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
            {searchQuery && searchResults.length > 0 && (
              <div
                className="search-results"
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  width: '100%',
                  backgroundColor: '#fff',
                  border: '1px solid #ccc',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                  zIndex: 1000,
                }}
              >
                {searchResults.map(product => (
                  <Link
                    to="/products"
                    as={Link}
                    key={product.id}
                    className="search-result-item"
                    style={{
                      display: 'block',
                      padding: '8px',
                      cursor: 'pointer',
                      transition: 'background-color 0.2s',
                      textDecoration: 'none',
                      color: 'black',
                    }}
                  >
                    {product.title}
                  </Link>
                ))}
              </div>
            )}
          </Form>
        </Navbar.Collapse>
        <Nav.Link to="/cart" as={Link} className="cart-icon">
          <div className='' style={{ marginRight: '20px' }}>
            <BsBagCheck />
            {cartProducts.length > 0 && <span className="cart-count">{cartProducts.length}</span>}
          </div>
        </Nav.Link>
      </Container>
    </Navbar>
  );
}
