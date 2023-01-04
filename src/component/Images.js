import React from 'react';
import Card from 'react-bootstrap/Card';

function Images({img}) {
  return (
    <>
    <Card.Img 
        variant="top" 
        src={img} 
        style={{ 
            width: '286px', 
            height: '286px', 
            objectFit: 'contain' 
        }}/>
    </>
  );
}

export default Images;