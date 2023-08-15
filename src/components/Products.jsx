import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { add } from '../store/cartSlice';
import { setProducts } from '../store/productSlice';
import Alert from "react-bootstrap/Alert"

export default function Products() {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector(state => state.products);

  useEffect(() => {
    // Dispatch an action for fetching products
    dispatch(setProducts());
  }, [dispatch]); 

if (status === 'loading'){
  return <p>Loading...</p>
}
if (status === 'error'){
  return <Alert key='danger'>Snap! Something went wrong!! Try again later</Alert>
}

  const addToCart = (product) => {
    // Dispatch an 'add' function
    dispatch(add(product));
  };
 


  const cards = products.map(product => (
    <Col key={product.id} md={3} style={{ marginBottom: '20px', marginTop: '5px' }}>
      <Card className='h-100'>
        <div className='text-center'>
          <Card.Img variant='top' src={product.image} style={{ width: '100px', height: '130px' }} />
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>&#8358;{product.price}</Card.Text>
        </Card.Body>
        <Card.Footer style={{ background: 'hotpink' }}>
          <Button variant='hotpink' onClick={() => addToCart(product)} style={{ background: 'hotpink', width: '100%' }}>
            Add To Cart
          </Button>
        </Card.Footer>
      </Card>
    </Col>
  ));

  return (
    <div>
      <h1 className='text-center mt-4'>Product Dashboard</h1>
      <Container fluid style={{ padding: '50px' }}>
        <Row>{cards}</Row>
      </Container>
    </div>
  );
}
