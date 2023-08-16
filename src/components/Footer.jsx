import React from 'react';

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#333',
        color: 'white',
        padding: '2rem 0',
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '1rem',
        }}
      >
        <h2
          style={{
            fontSize: '2rem',
            margin: '0',
            marginRight: '1rem',
            color: 'hotpink',
          }}
        >
          Oja
        </h2>
        <p
          style={{
            fontSize: '1rem',
            margin: '0',
          }}
        >
          Your One-Stop Shop for Online Shopping
        </p>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <p
          style={{
            fontSize: '1rem',
            margin: '0',
            marginRight: '1rem',
          }}
        >
          &copy; {new Date().getFullYear()} Oja. All Rights Reserved.
        </p>
        <ul
          style={{
            listStyle: 'none',
            margin: '0',
            padding: '0',
            display: 'flex',
          }}
        >
          <li
            style={{
              margin: '0',
              marginRight: '1rem',
            }}
          >
            <a
              href="/privacy-policy"
              rel="noopener noreferrer"
              style={{
                textDecoration: 'none',
                color: 'white',
                fontSize: '1rem',
                transition: 'color 0.3s ease',
              }}
            >
              Privacy Policy
            </a>
          </li>
          <li
            style={{
              margin: '0',
              marginRight: '1rem',
            }}
          >
            <a
              href="/terms-of-service"
              rel="noopener noreferrer"
              style={{
                textDecoration: 'none',
                color: 'white',
                fontSize: '1rem',
                transition: 'color 0.3s ease',
              }}
            >
              Terms of Service
            </a>
          </li>
          <li
            style={{
              margin: '0',
            }}
          >
            <a
              href="/contact-us"
              rel="noopener noreferrer"
              style={{
                textDecoration: 'none',
                color: 'white',
                fontSize: '1rem',
                paddingRight: '20px',
                transition: 'color 0.3s ease',
              }}
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
