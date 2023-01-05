import React, { useState, useEffect } from 'react';
import RightNavigation from '../../page/RightNavigation';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import FormInput from './FormInput';
import Button from 'react-bootstrap/Button';
import axios from 'axios'


function CreatePartner() {
    const [nameRU, setNameRU] = useState('')
    const [nameKG, setNameKG] = useState('')    
    const [nameEN, setNameEN] = useState('')

    const [discount, setDiscount] = useState('')

    const [imgLogo, setImgLogo] = useState('')
    const [imgBackdrop, setImgBackdrop] = useState('')


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

    const [categoryId, setCategoryId] = useState('');
    const [cityId, setCityId] = useState('');


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
     

    const createPartnersubmin = () => {
        // const data = {
        //     category_id: categoryId,
        //     city_id: cityId
        // }
        
        const formData = new FormData()
        formData.append('category_id', categoryId)
        // formData.append('partner_name', '')
        formData.append('city_id', cityId)
        formData.append('discount', discount)
        // formData.append('partner_logo', '')
        // formData.append('partner_backdrop', '')
        // formData.append('partner_short_description', '')
        // formData.append('partner_condition', '')
        // formData.append('create_date', '')
        // formData.append('end_date', '')

        // console.log('data', data);
        console.log('formData', formData);
    }  


    function imgLogoHandleChange(event){
        console.log('imgLogoHandleChange', event.target.value);
        setImgLogo(event.target.value)
    }

    function imgBackdropHandleChange(event){
        console.log('imgBackdropHandleChange', event.target.value);
        setImgBackdrop(event.target.value)
    }


    function discountHandleChange(event){
        setDiscount(event.target.value)
    }

    function categoryHandleChange(event) {
        if(event.target.value.length > 16){
            setCategoryId(event.target.value)
        }
    }

    function cityHandleChange(event) {
        if(event.target.value.length > 14){
            setCityId(event.target.value)
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
                                onChange={discountHandleChange} 
                            />

                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label style={{fontWeight: 'bold', paddingTop: '2%'}}>Выберите картинку для логотипа</Form.Label>
                            <Form.Control 
                                type="file" 
                                onChange={imgLogoHandleChange}
                            />
                        </Form.Group>    

                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label style={{fontWeight: 'bold', paddingTop: '2%'}}>Выберите картинку для заднего фона</Form.Label>
                            <Form.Control 
                                type="file" 
                                onChange={imgBackdropHandleChange}
                            />
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
                        <Button 
                        variant="success"
                        // type='submit'
                        onClick={createPartnersubmin}
                        >Сохронить</Button>
                </Form>

                </div>

                
            </RightNavigation>
        </>

  );
}

export default CreatePartner;