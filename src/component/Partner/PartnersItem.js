import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import {useNavigate} from 'react-router-dom'
import Images from '../Images';


function PartnerItem({partner}) {
  let navigate = useNavigate()

  function handleGetIdPartnerClick(url){
    navigate({
        pathname: url,
        search: partner.partner_id
    })
}


  return ( <>
    <Card style={{ width: '18rem'}}>
      <Images img={partner.partner_logo}/>
      <Card.Body>
        <Card.Title>Partner_name: {partner.partner_name['ru-RU']}</Card.Title>
        <Card.Text><strong>Discount:</strong> {partner.discount}</Card.Text>
        <Card.Text><strong>Status:</strong>  {partner.status ? 'Активный' : 'Неактивный'}</Card.Text>
        <Card.Text><strong>Create_date:</strong> {partner.create_date}</Card.Text>
        <Card.Text><strong>End_date:</strong> {partner.end_date}</Card.Text>
      </Card.Body>
        <ButtonGroup  style={{padding: '2%'}}>
          <Button variant="info" onClick={() => handleGetIdPartnerClick('details') }>Детальный просмотр</Button>
        </ButtonGroup>
    </Card>
  </>

  );
}

export default PartnerItem;