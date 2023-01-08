import React from 'react';
import Form from 'react-bootstrap/Form';

function FormInputImg({handler, title}) {
  return (
    <>
        <Form.Group controlId="formFile" className="mb-3">
            <Form.Label style={{fontWeight: 'bold', paddingTop: '2%'}}>{title}</Form.Label>
            <Form.Control 
                type="file" 
                onChange={handler}
                required
            />
        </Form.Group> 
    </>
  );
}

export default FormInputImg;