import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroupDesctiption from '../component/Partner/ListGroupDesctiption';
import Images from '../component/Images';
import Button from 'react-bootstrap/Button';

function PartnerDetailsPage({partner}) {
  return (
    <>
    <div style={{display: 'flex'}}>
        <div style={{margin: '2%', border:'1px solid rgba(0,0,0,0.3)' , borderRadius: '3px'}}>
            <Images img={partner.partner_logo}/>
            <p style={{textAlign: 'center'}}>Логотип партнера</p>
        </div>
        <div style={{margin: '2%', border:'1px solid rgba(0,0,0,0.3)' , borderRadius: '3px'}}>
            <Images img={partner.partner_backdrop}/>
            <p style={{textAlign: 'center'}}>Задник партнера</p>
        </div>
    </div>

    <div style={{padding: '2%'}}>
        <Card style={{border: 'none'}}>

            <Card.Subtitle style={{fontSize:'20px'}}> 
                Имя партнера:
            </Card.Subtitle >
            <ListGroupDesctiption value={partner.partner_name}/>

            <Card.Subtitle style={{padding: '2% 0 0 0', fontSize:'20px'}}> 
                Скидка: {partner.discount}
            </Card.Subtitle>

            <Card.Subtitle style={{padding: '2% 0 0 0', fontSize:'20px'}}> 
                Краткое описание: 
            </Card.Subtitle>
            <ListGroupDesctiption value={partner.partner_short_description}/>

            <Card.Subtitle style={{padding: '2% 0 0 0', fontSize:'20px'}}> 
                Условие партнера: 
            </Card.Subtitle>
            <ListGroupDesctiption value={partner.partner_condition}/>

            <Card.Subtitle style={{padding: '2% 0 0 0', fontSize:'20px'}}> 
                Описание партнера: 
            </Card.Subtitle>
            <ListGroupDesctiption value={partner.partner_description}/>

            <Card.Subtitle style={{padding: '2% 0 0 0', fontSize:'20px'}}> 
                Статтус партнера:  { partner.status ? 'Активный' : 'Неактивный'}
            </Card.Subtitle>

            <Card.Subtitle style={{padding: '1% 0 0 0', fontSize:'20px'}}> 
                Дата записи партнера:  { partner.create_date }
            </Card.Subtitle>

            <Card.Subtitle style={{padding: '1% 0 0 0', fontSize:'20px'}}> 
                Дата окончания партнерства:  { partner.end_date }
            </Card.Subtitle>
        </Card>
    </div>
        <div style={{display: 'flex', justifyContent: 'flex-end', padding: '2% 1% 2% 0'}}>
            <Button style={{margin:'5px', fontSize: '20px'}}variant="info">Изменить </Button>
            <Button style={{margin:'5px', fontSize: '20px'}} variant="danger">Удалить </Button>
        </div>
    </>

    
  );
}

export default PartnerDetailsPage;