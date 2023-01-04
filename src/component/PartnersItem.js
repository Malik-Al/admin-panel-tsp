import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function PartnerItem({partner}) {
  return ( <>
    <Card style={{ width: '18rem'}}>
      <Card.Img 
          variant="top" 
          src={partner.partner_logo} 
          style={{ width: '286px', height: '286px', objectFit: 'contain' }}
        />
      <Card.Body>
        <Card.Title>Partner_name: {partner.partner_name['ru-RU']}</Card.Title>
        <Card.Text>Discount: {partner.discount}</Card.Text>
        <Card.Text>Status: {partner.status}</Card.Text>
        <Card.Text>Create_date: {partner.create_date}</Card.Text>
        <Card.Text>End_date: {partner.end_date}</Card.Text>
      </Card.Body>
        <ButtonGroup className="mb-2" >
          <Button variant="primary">Go somewhere</Button>
          <Button variant="primary">Go somewhere</Button>
        </ButtonGroup>
    </Card>
  </>

  );
}

export default PartnerItem;