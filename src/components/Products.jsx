import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(data => data.json())
      .then(result => setProducts(result));
  }, []);

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
          <Button variant='hotpink' style={{ background: 'hotpink', width: '100%' }}>
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
