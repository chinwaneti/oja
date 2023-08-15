import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '20px',
  },
  image: {
    maxWidth: '100%',
    maxHeight: '300px',
    marginBottom: '20px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
    textAlign: 'center',
  },
  price: {
    fontSize: '18px',
    color: '#FF69B4',
    marginBottom: '15px',
    textAlign: 'center',
  },
  description: {
    fontSize: '16px',
    lineHeight: '1.5',
    padding: '3px',
    paddingLeft: '8px',

  },
};

function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProductDetails();
  }, [productId]);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div style={styles.container}>
      <h2 style={{ marginBottom: '20px' }}>Product Detail Page</h2>
      <div>
        <img src={product.image} alt={product.title} style={styles.image} />
        <h3 style={styles.title}>{product.title}</h3>
        <p style={styles.price}>&#8358;{product.price}</p>
        <p style={styles.description}>{product.description}</p>
      </div>
    </div>
  );
}

export default ProductDetail;
