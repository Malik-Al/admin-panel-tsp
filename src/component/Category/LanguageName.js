import React from 'react';
import Typography from '@mui/material/Typography';

function LanguageName({name}) {
  return (
    <>
    <div style={{padding: '2%'}}>
      <Typography><strong>Русский язык:</strong> {name['ru-RU']}</Typography>
      <Typography><strong>Кыргызский язык:</strong> {name['ky-KG']}</Typography>
      <Typography><strong>English language:</strong> {name['en-US']}</Typography>
    </div>

    </>
  );
}

export default LanguageName;