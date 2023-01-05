import React from 'react'
import Form from 'react-bootstrap/Form';

function Datepicker ({selectedValue, onChange, nameDate}) {
    return ( 
    <>
    <div style={{marginTop: '2%'}}>
        <div className="row">
            <div className="col-md-4">
                <Form.Group controlId="doj">
                    <Form.Label>{nameDate}</Form.Label>
                    <Form.Control 
                            type="date" 
                            name="doj" 
                            defaultValue={selectedValue} 
                            placeholder="Date of Joining" 
                            onChange={(e) => onChange(e)} />
                </Form.Group>
            </div>
        </div>
    </div>
    </>
    )
}

export default Datepicker;