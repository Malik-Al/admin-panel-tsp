import React, { useState, useEffect } from 'react';
import RightNavigation from '../../page/RightNavigation';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
// import Button from 'react-bootstrap/Button';
import axios from 'axios'


function CreatePartner() {
    const [nameRU, setNameRU] = useState('')
    const [nameKG, setNameKG] = useState('')    
    const [nameEN, setNameEN] = useState('')

    const [category, setCategory] = useState([]);
    const [city, setCity] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8029/api/category')
        .then(res => {
            const response = res.data.data
            setCategory(response)
        })
        .catch(error => error)

        axios.get('http://localhost:8029/api/city')
        .then(res => {
            const response = res.data.data
            setCity(response)
        })
        .catch(error => error)
     
      }, []);
     

    function categoryHandleChange(event) {
        event.preventDefault();
        if(event.target.value.length > 16){
            console.log('event.target.value', event.target.value);
        }
    }

    function cityHandleChange(event) {
        event.preventDefault();
        if(event.target.value.length > 14){
            console.log('event.target.value', event.target.value);
        }
    }

    function handleChangeRu(event) {
        event.preventDefault();
        setNameRU(event.target.value);
    }

    function handleChangeKg(event) {
        event.preventDefault();
        setNameKG(event.target.value);
    }

    function handleChangeEn(event) {
        event.preventDefault();
        setNameEN(event.target.value);
    }


  return ( 
        <>
            <RightNavigation>
                <h1>Create Partner</h1>
                <div style={{ 
                    padding: '4%', 
                    margin: '3%', 
                    border:'1px solid rgba(0,0,0,0.3)' , 
                    borderRadius: '3px'
                }}>
                <Form >
                        <Form.Label> Категория </Form.Label>
                        <FloatingLabel controlId="floatingSelect" >
                            <Form.Select 
                                aria-label="Floating label select example" 
                                style={{padding: '1%', height: 'calc(2.5rem + 1px)' }}
                                onChange={categoryHandleChange}
                                    >
                                       <option>Выберите категорию</option>
                                { 
                                    category.map(person => 
                                        <option 
                                            value={person.category_id}
                                            key={person.category_id}
                                        >
                                            {person.category_name['ru-RU']}
                                        </option>
                                    )
                                }
                            </Form.Select>
                        </FloatingLabel>


                        <Form.Label> Город </Form.Label>
                        <FloatingLabel controlId="floatingSelect" >
                            <Form.Select 
                                aria-label="Floating label select example" 
                                style={{padding: '1%', height: 'calc(2.5rem + 1px)' }}
                                onChange={cityHandleChange}
                                    >
                                       <option>Выберите город</option>
                                { 
                                    city.map(person => 
                                        <option 
                                            value={person.city_id}
                                            key={person.city_id}
                                        >
                                            {person.city_name['ru-RU']}
                                        </option>
                                    )
                                }
                            </Form.Select>
                        </FloatingLabel>


                        <Form.Label> Название парнера </Form.Label>
                        <div style={{display: 'flex' }}>
                            <Form.Control 
                                type="text" 
                                placeholder="Русский язык" 
                                onChange={handleChangeRu}
                            />
                            <Form.Control 
                                type="text" 
                                placeholder="Кыргызский язык" 
                                onChange={handleChangeKg}
                            />
                            <Form.Control 
                                type="text" 
                                placeholder="English lang" 
                                onChange={handleChangeEn}
                            />
                        </div>

                        <Form.Label> Скидка парнера </Form.Label>
                        <Form.Control 
                                type="text" 
                                placeholder="Скидка" 
                            />

                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Выберите картинку для логотипа</Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>    

                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Выберите картинку для заднего фона</Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>    


                        <Form.Label> Краткое описание </Form.Label>
                        <div style={{display: 'flex' }}>
                            <Form.Control 
                                type="text" 
                                placeholder="Русский язык" 
                            />
                            <Form.Control 
                                type="text" 
                                placeholder="Кыргызский язык" 
                            />
                            <Form.Control 
                                type="text" 
                                placeholder="English lang" 
                            />
                        </div>
                </Form>

                </div>

                
            </RightNavigation>
        </>

  );
}

export default CreatePartner;