import React from 'react';

export default function Contact() {
  return (
    <div >
    
    <div
      style={{
         marginTop: '100px', marginBottom: "50px" ,
        background: 'linear-gradient(to right, #3A1C71, #D76D77, #FFAF7B)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <div
        style={{
          backgroundColor: 'white',
          padding: '2rem',
          boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.2)',
          borderRadius: '10px',
          textAlign: 'center',
          maxWidth: '500px',
        }}
      >
        <h2
          style={{
            fontSize: '2rem',
            marginBottom: '1rem',
            color: '#3A1C71',
          }}
        >
          Contact Us
        </h2>
        <p
          style={{
            fontSize: '1rem',
            color: '#555',
            marginBottom: '2rem',
          }}
        >
          Have questions or suggestions? Reach out to us!
        </p>
        <form
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <input
            type="text"
            placeholder="Your Name"
            style={{
              padding: '0.5rem',
              marginBottom: '1rem',
              borderRadius: '5px',
              border: '1px solid #ccc',
            }}
          />
          <input
            type="email"
            placeholder="Your Email"
            style={{
              padding: '0.5rem',
              marginBottom: '1rem',
              borderRadius: '5px',
              border: '1px solid #ccc',
            }}
          />
          <textarea
            placeholder="Your Message"
            style={{
              padding: '0.5rem',
              marginBottom: '1rem',
              borderRadius: '5px',
              border: '1px solid #ccc',
              resize: 'vertical',
              minHeight: '100px',
            }}
          ></textarea>
          <button
            type="submit"
            style={{
              backgroundColor: '#3A1C71',
              color: 'white',
              border: 'none',
              padding: '0.5rem 2rem',
              cursor: 'pointer',
              borderRadius: '5px',
              fontSize: '1rem',
              transition: 'background-color 0.3s ease',
            }}
          >
            Send Message
          </button>
        </form>
      </div>
    </div></div>
  );
}
