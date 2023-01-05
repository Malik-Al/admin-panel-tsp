import React, { useState, useEffect } from 'react';
import RightNavigation from '../../page/RightNavigation';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import FormInput from './FormInput';
// import Button from 'react-bootstrap/Button';
import axios from 'axios'


function CreatePartner() {
    const [nameRU, setNameRU] = useState('')
    const [nameKG, setNameKG] = useState('')    
    const [nameEN, setNameEN] = useState('')

    const [shortDescriptionRu, setShortDescriptionRu] = useState('')
    const [shortDescriptionKg, setShortDescriptionKg] = useState('')    
    const [shortDescriptionEn, setShortDescriptionEn] = useState('')

    const [conditionRu, setConditionRu] = useState('')
    const [conditionKg, setConditionKg] = useState('')
    const [conditionEn, setConditionEn] = useState('')

    const [ detailedDescriptionRu, setDetailedDescriptionRu] = useState('')
    const [ detailedDescriptionKg, setDetailedDescriptionKg] = useState('')
    const [ detailedDescriptionEn, setDetailedDescriptionEn] = useState('')
   

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
        if(event.target.value.length > 16){
            console.log('event.target.value', event.target.value);
        }
    }

    function cityHandleChange(event) {
        if(event.target.value.length > 14){
            console.log('event.target.value', event.target.value);
        }
    }

    function handleChangeRu(event) {
        setNameRU(event.target.value);
    }

    function handleChangeKg(event) {
        setNameKG(event.target.value);
    }

    function handleChangeEn(event) {
        setNameEN(event.target.value);
    }

    function handleChangeShortDescriptionRu(event) {
        setShortDescriptionRu(event.target.value);
    }

    function handleChangeShortDescriptionKg(event) {
        setShortDescriptionKg(event.target.value);
    }

    function handleChangeShortDescriptionEn(event) {
        setShortDescriptionEn(event.target.value);
    }


    function handleChangeConditionEn(event) {
        setConditionEn(event.target.value);
    }

    function handleChangeConditionRu(event) {
        setConditionRu(event.target.value);
    }

    function handleChangeConditionKg(event) {
        setConditionKg(event.target.value);
    }


    function handleChangeDescriptionEn(event) {
        setDetailedDescriptionEn(event.target.value);
    }
    function handleChangeDescriptionRu(event) {
        setDetailedDescriptionRu(event.target.value);
    }
    function handleChangeDescriptionKg(event) {
        setDetailedDescriptionKg(event.target.value);
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
                        <Form.Label
                        style={{
                            fontWeight: 'bold'
                        }}
                        > Категория </Form.Label>
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


                        <Form.Label style={{fontWeight: 'bold', paddingTop: '2%'}}> Город </Form.Label>
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

                         <FormInput 
                            handlerRu={handleChangeRu} 
                            handlerEn={handleChangeEn}
                            handlerKg={handleChangeKg}
                            title={'Название парнера'}
                         />           

                        <Form.Label style={{fontWeight: 'bold' , paddingTop: '2%'}}> Скидка парнера </Form.Label>
                        <Form.Control 
                                type="text" 
                                placeholder="Скидка" 
                            />

                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label style={{fontWeight: 'bold', paddingTop: '2%'}}>Выберите картинку для логотипа</Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>    

                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label style={{fontWeight: 'bold', paddingTop: '2%'}}>Выберите картинку для заднего фона</Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>    


                        <FormInput 
                            handlerRu={handleChangeShortDescriptionRu} 
                            handlerEn={handleChangeShortDescriptionEn}
                            handlerKg={handleChangeShortDescriptionKg}
                            title={'Краткое описание'}
                         /> 

                        <FormInput 
                            handlerRu={handleChangeConditionRu} 
                            handlerEn={handleChangeConditionEn}
                            handlerKg={handleChangeConditionKg}
                            title={'Условие партнера'}
                         /> 

                        <Form.Group className="mb-3" >
                            <Form.Label style={{fontWeight: 'bold', paddingTop: '2%'}}>Подробное описание</Form.Label>
                            <Form.Control 
                                style={{marginTop: '2%'}}
                                as="textarea" rows={3}
                                placeholder="Русский язык"  
                                onChange={handleChangeDescriptionRu}
                            />
                            <Form.Control 
                                style={{marginTop: '2%'}}
                                as="textarea" rows={3}
                                placeholder="Кыргызский язык"  
                                onChange={handleChangeDescriptionEn}
                            />
                            <Form.Control 
                                style={{marginTop: '2%'}}
                                as="textarea" rows={3}
                                placeholder="English lang"  
                                onChange={handleChangeDescriptionKg}
                            />                            
                        </Form.Group>


                        <Form.Label style={{fontWeight: 'bold' , paddingTop: '2%'}}> Дата создания </Form.Label>
                        <Form.Control 
                                type="text" 
                                placeholder="дата" 
                            />


                </Form>

                </div>

                
            </RightNavigation>
        </>

  );
}

export default CreatePartner;