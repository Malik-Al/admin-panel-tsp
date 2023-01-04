import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import PartnersDetails from './PartnerDetails';

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
        <Card.Text><strong>Discount:</strong> {partner.discount}</Card.Text>
        <Card.Text><strong>Status:</strong>  {partner.status ? 'Активный' : 'Неактивный'}</Card.Text>
        <Card.Text><strong>Create_date:</strong> {partner.create_date}</Card.Text>
        <Card.Text><strong>End_date:</strong> {partner.end_date}</Card.Text>
      </Card.Body>
        <ButtonGroup  style={{padding: '2%'}}>
          <Button variant="info" onClick={() => <PartnersDetails patrner_id={partner.partner_id}/> }>Детальный просмотр</Button>
        </ButtonGroup>
    </Card>
  </>

  );
}

export default PartnerItem;