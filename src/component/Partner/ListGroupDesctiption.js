import ListGroup from 'react-bootstrap/ListGroup';
import React from 'react';


function ListGroupDesctiption({value}) {
  return (
    <>
     <ListGroup >
        <ListGroup.Item style={{border: 'none', padding: '0 0 0 10px', fontWeight: '400'}}> 
            <strong>Русский язык: </strong>  
            {value['ru-RU']}
        </ListGroup.Item>
        <ListGroup.Item style={{border: 'none', padding: '0 0 0 10px', fontWeight: '400'}}> 
            <strong> Кыргызский язык: </strong>  
            {value['ky-KG']}
        </ListGroup.Item>
        <ListGroup.Item style={{border: 'none', padding: '0 0 0 10px', fontWeight: '400'}}> 
            <strong> English lang: </strong>  
            {value['en-US']}
        </ListGroup.Item>
    </ListGroup>
    </>
    
  );
}

export default ListGroupDesctiption;