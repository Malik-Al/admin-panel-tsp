import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function DetailCity ({nameCity}){
    return <>
        <Card style={{ width: '18rem' }}>
        <ListGroup variant="flush">
            <ListGroup.Item><span>Русский язык: </span>{nameCity['ru-RU']}</ListGroup.Item>
            <ListGroup.Item><span>Кыргызский язык: </span>{nameCity['ky-KG']}</ListGroup.Item>
            <ListGroup.Item><span>English language: </span>{nameCity['en-US']}</ListGroup.Item>
        </ListGroup>
        </Card>
    </>
}
  
export default DetailCity;