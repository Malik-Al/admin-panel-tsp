import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import ImgIcon from './ImgIcon';
import LanguageName from './LanguageName';

export default function SimpleAccordion({category}) {
  return (<>
    <div style={{
        margin: '2%'
    }}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{category.category_name['ru-RU']}</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <div style={{paddingBottom: '2%'}}>
                <strong >Статус:</strong> {category.status ? "Активный" : "Неактивынй"}
            </div>
            <div style={{display: 'flex'}}>
                <ImgIcon img={category.category_icon_android} nameIcon={'Android'}/>
                <ImgIcon img={category.category_icon_ios} nameIcon={'Ios'}/>
                <LanguageName name={category.category_name}/>
            </div>
            <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                <Button variant="contained">Изменить</Button>
            </div>
        </AccordionDetails>
      </Accordion>
    </div>
  </>

  );
}
