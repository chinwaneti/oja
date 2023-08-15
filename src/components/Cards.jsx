import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import { remove } from '../store/cartSlice';
import Checkout from './Checkout';
import { BsBagDash } from 'react-icons/bs';

export default function Cards() {
  const products = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const removeFromCart = (id) => {
    dispatch(remove(id));
  }

  const cardStyle = {
    marginBottom: '20px',
    marginTop: '5px',
  };

  const productImageStyle = {
    width: '100px',
    height: '130px',
    objectFit: 'cover',
  };

  const removeButtonStyle = {
    backgroundColor: '#dc3545',
    borderColor: '#dc3545',
    color: 'white',
  };

  const checkoutSectionStyle = {
    backgroundColor: '#f8f9fa',
    marginTop: '20px',
    padding: '20px',
    textAlign: 'center',
    borderRadius: '10px',
  };

  const checkoutAmountStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const emptyCartStyle = {
    fontSize: '1rem',
    color: 'gray',
    marginBottom: '10px',
  };

  const totalAmount = products.reduce((total, product) => total + product.price, 0).toFixed(2);

  const cards = products.map(product => (
    <Col key={product.id} md={4} style={cardStyle}>
      <Card className='h-100'>
        <div className='text-center'>
          <Card.Img variant='top' src={product.image} style={productImageStyle} />
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>&#8358;{product.price}</Card.Text>
        </Card.Body>
        <Card.Footer style={{ background: 'white' }}>
          <Button variant='danger' onClick={() => removeFromCart(product.id)} style={removeButtonStyle}>
            Remove
          </Button>
        </Card.Footer>
      </Card>
    </Col>
  ));

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
  };

  const rowStyle = {
    margin: '0 -15px',
  };

  return (
    <div style={containerStyle}>
      <div className='row' style={rowStyle}>
        {cards}
      </div>
      {products.length > 0 && (
        <div style={checkoutSectionStyle}>
          <h2>Checkout</h2>
          <p style={checkoutAmountStyle}>
            Total: &#8358;{totalAmount}
          </p>
          <Checkout />
        </div>
      )}
      {products.length === 0 && (
        <div style={emptyCartStyle}>
          <div><BsBagDash size={185} /></div>
         <p className='' style={{marginTop: '100px'}}> Your Bag is empty.</p>
        </div>
      )}
    </div>
  )
}
