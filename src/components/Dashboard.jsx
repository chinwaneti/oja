import React from 'react';
import Products from './Products';

const imageUrl =
  'https://img.ltwebstatic.com/images3_pi/2023/06/25/1687683657248048461cb8ae0f670c454b05461750_thumbnail_600x.jpg';

const containerStyle = {
  backgroundColor: 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '90%',
  margin: '0 5%',
  borderTop: '2px solid',
  borderRadius: '10px',
  marginTop: '10px',
  padding: '20px',
  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
};

const contentStyle = {
  width: '60%',
};

const headingStyle = {
  fontSize: '2rem',
  fontWeight: 'bold',
  textAlign: 'center',
};



const imageContainerStyle = {
  width: '40%',
};

const imageStyle = {
  width: '200px',
  height: '200px',
};

export default function Dashboard() {
  return (
    <div>
    <h1 className='' style={{marginTop: "50px", marginBottom:"50px"}}></h1>
      <div style={containerStyle}>
        <div style={contentStyle}>
          <p style={headingStyle}>
            Grab Upto 50% Discount On Selected Items
          </p>
        </div>
        <div style={imageContainerStyle}>
          <img src={imageUrl} alt='pics' style={imageStyle} />
        </div>
      </div>
      <Products />
    </div>
  );
}
