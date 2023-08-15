import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initiateCheckout, resetCheckoutStatus, setUserInformation } from '../store/productSlice';

export default function Checkout() {
  const dispatch = useDispatch();
  const checkoutStatus = useSelector(state => state.products.checkoutStatus);
  const cartProducts = useSelector(state => state.cart);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    if (successMessage) {
      const timeout = setTimeout(() => {
        setSuccessMessage('');
      }, 3000); // Clear the success message after 3 seconds

      return () => clearTimeout(timeout);
    }
  }, [successMessage]);

  const handleCheckout = () => {
    if (cartProducts.length === 0) {
      setErrorMessage('Your cart is empty.');
      setTimeout(() => {
        setErrorMessage('');
      }, 3000); // Clear the error message after 3 seconds
      return;
    }

    if (!name || !email || !address) {
      setErrorMessage('All fields are required.');
      setTimeout(() => {
        setErrorMessage('');
      }, 3000); // Clear the error message after 3 seconds
      return;
    }

    const userInformation = { name, email, address };
    dispatch(setUserInformation(userInformation));
    dispatch(initiateCheckout());
    setName('');
    setEmail('');
    setAddress('');
    setSuccessMessage('Thank you for your order!');
  };

  const checkoutButtonStyle = {
    backgroundColor: '#007bff',
    borderColor: '#007bff',
    color: 'white',
    marginTop: '10px',
  };

  const successMessageStyle = {
    color: 'green',
  };

  return (
    <div>
      <div>
        <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} required />
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
        <input type="text" placeholder="Address" value={address} onChange={e => setAddress(e.target.value)} required />
        <button style={checkoutButtonStyle} onClick={handleCheckout}>Proceed to Checkout</button>
        {checkoutStatus === 'error' && <p>An error occurred during checkout. Please try again.</p>}
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        {successMessage && <p style={successMessageStyle}>{successMessage}</p>}
      </div>
    </div>
  );
}
