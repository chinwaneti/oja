import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import { remove } from '../store/cartSlice';

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
  
  };

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
        </Card.Footer>
        <Button variant='danger' onClick={() => removeFromCart(product.id)} style={removeButtonStyle}>
          Remove
        </Button>
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
    </div>
  )
}
