import React from 'react';
import Card from 'react-bootstrap/Card';

function ImgIcon({img, nameIcon}) {
  return (
    <>
    <div >
    <Card.Img 
        variant="top" 
        src={img} 
        style={{ 
            width: '86px', 
            height: '86px', 
            objectFit: 'contain',
            padding: '2%',
            margin: '2%'
        }}/>

        <div style={{
            paddingTop: '2%',
            textAlign: 'center'
            }}>
                {nameIcon}
            </div>
    </div>
    </>
  );
}

export default ImgIcon;