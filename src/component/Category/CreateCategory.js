import React from 'react';
import RightNavigation from '../../page/RightNavigation';
import Form from 'react-bootstrap/Form';

function CreateCategory() {
  return (
    <>
    <RightNavigation>
        <div style={{ 
                    padding: '4%', 
                    margin: '3%', 
                    border:'1px solid rgba(0,0,0,0.3)' , 
                    borderRadius: '3px'
                }}>


                <Form >
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label style={{fontWeight: 'bold', paddingTop: '2%'}}>Выберите картинку для ios</Form.Label>
                        <Form.Control 
                            type="file" 
                            // onChange={imgBackdropHandleChange}
                            required
                        />
                    </Form.Group>   

                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label style={{fontWeight: 'bold', paddingTop: '2%'}}>Выберите картинку для android</Form.Label>
                        <Form.Control 
                            type="file" 
                            // onChange={imgBackdropHandleChange}
                            required
                        />
                    </Form.Group>  
                </Form>



                </div>

    </RightNavigation>
    </>
  );
}

export default CreateCategory;