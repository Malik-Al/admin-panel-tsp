import React from 'react';
import Form from 'react-bootstrap/Form';


function FormInput ({handlerRu, handlerKg, handlerEn, title}){
      return (
        <>
            <Form.Label style={{fontWeight: 'bold', paddingTop: '2%'}}> {title} </Form.Label>
            <div style={{display: 'flex' }}>
                <Form.Control 
                    type="text" 
                    placeholder="Русский язык" 
                    onChange={handlerRu}
                />
                <Form.Control 
                    type="text" 
                    placeholder="Кыргызский язык" 
                    onChange={handlerKg}
                />
                <Form.Control 
                    type="text" 
                    placeholder="English language" 
                    onChange={handlerEn}
                />
            </div>
        </>

     )
      
} 


  
export default FormInput;