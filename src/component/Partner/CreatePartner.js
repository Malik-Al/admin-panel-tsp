import React, { useState, useEffect } from 'react';
import RightNavigation from '../../page/RightNavigation';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import FormInput from './FormInput';
import Button from 'react-bootstrap/Button';
import axios from 'axios'
import moment from 'moment/moment';
import DatePicker from './Datepicker'
import TimePickers from './TimePickers';
import config from '../../config.json'
import {useNavigate} from 'react-router-dom'

function CreatePartner() {
    let navigate = useNavigate()
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    const [dateTime, setDateTime] = useState(null)

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
        axios.get(config.host.category)
        .then(res => {
            const response = res.data.data
            setCategory(response)
        })
        .catch(error => error)

        axios.get(config.host.city)
        .then(res => {
            const response = res.data.data
            setCity(response)
        })
        .catch(error => error)
     
      }, []);

    const createPartnersubmin = (e) => {
        const namePartner = {
            'ru-RU': nameRU,
            'ky-KG': nameKG,
            'en-US': nameEN
        }

        const shortDescription = {
            'ru-RU': shortDescriptionRu,
            'ky-KG': shortDescriptionKg,
            'en-US': shortDescriptionEn
        }

        const condition = {
            'ru-RU': conditionRu,
            'ky-KG': conditionKg,
            'en-US': conditionEn
        }
        
        const description = {
            'ru-RU': detailedDescriptionRu,
            'ky-KG': detailedDescriptionKg,
            'en-US': detailedDescriptionEn
        }
        
        const formData = new FormData()
        formData.append('category_id', categoryId)
        formData.append('city_id', cityId)
        formData.append('partner_name', JSON.stringify(namePartner))
        formData.append('discount', discount)
        formData.append('partner_logo', imgLogo)
        formData.append('partner_backdrop', imgBackdrop)
        formData.append('partner_short_description', JSON.stringify(shortDescription))
        formData.append('partner_condition', JSON.stringify(condition))
        formData.append('partner_description', JSON.stringify(description))
        formData.append('create_date', moment(startDate).format('YYYY-MM-DD'))
        formData.append('end_date', `${moment(endDate).format('YYYY-MM-DD')} ${dateTime}`)

        const headers ={
            headers: {
                'Content-Type': 'multipart/form-data'
              }
        }

        axios.post(config.host.partner, formData, headers)
        .then(res => {
            const response = res.data.data
            console.log('response',response)
            navigate('/')
        })
        .catch(error => error)

        return 

    }  


    function imgLogoHandleChange(event){
        setImgLogo(event.target.files[0])
    }

    function imgBackdropHandleChange(event){
        setImgBackdrop(event.target.files[0])
    }


    function discountHandleChange(event){
        setDiscount(event.target.value)
    }

    function categoryHandleChange(event) {
        if(event.target.value.length > 20){
            setCategoryId(event.target.value)
        }
    }

    function cityHandleChange(event) {
        if(event.target.value.length > 20){
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
                <h1 style={{textAlign: 'center'}}>Создание партнера</h1>
                <div style={{ 
                    padding: '4%', 
                    margin: '3%', 
                    border:'1px solid rgba(0,0,0,0.3)' , 
                    borderRadius: '3px'
                }}>
                <Form >
                        <Form.Label style={{fontWeight: 'bold'}}
                        > Категорий </Form.Label>
                        <FloatingLabel controlId="floatingSelect">
                            <Form.Select 
                                style={{padding: '1%', height: 'calc(2.5rem + 1px)' }}
                                onChange={categoryHandleChange}
                                required
                                >
                                    <option></option>

                                { 
                                    category.map(person => 
                                        <option 
                                            value={person.category_id}
                                            key={person.category_id}
                                            required
                                        >
                                            {person.category_name['ru-RU']}
                                        </option>
                                    )
                                }
                            </Form.Select>
                        </FloatingLabel>


                        <Form.Label style={{fontWeight: 'bold', paddingTop: '2%'}}> Города </Form.Label>
                        <FloatingLabel controlId="floatingSelect" >
                            <Form.Select 
                                style={{padding: '1%', height: 'calc(2.5rem + 1px)' }}
                                onChange={cityHandleChange}
                                required
                                >
                                       <option></option>
                                { 
                                    city.map(person => 
                                        <option 
                                            value={person.city_id}
                                            key={person.city_id}
                                            required
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
                                required
                            />

                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label style={{fontWeight: 'bold', paddingTop: '2%'}}>Выберите картинку для логотипа</Form.Label>
                            <Form.Control 
                                type="file" 
                                onChange={imgLogoHandleChange}
                                required
                            />
                        </Form.Group>    

                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label style={{fontWeight: 'bold', paddingTop: '2%'}}>Выберите картинку для заднего фона</Form.Label>
                            <Form.Control 
                                type="file" 
                                onChange={imgBackdropHandleChange}
                                required
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
                                as="textarea" 
                                rows={3}
                                placeholder="Русский язык"  
                                onChange={handleChangeDescriptionRu}
                                required

                            />
                            <Form.Control 
                                style={{marginTop: '2%'}}
                                as="textarea" 
                                rows={3}
                                placeholder="Кыргызский язык"  
                                onChange={handleChangeDescriptionKg}
                                required

                            />
                            <Form.Control 
                                style={{marginTop: '2%'}}
                                as="textarea" 
                                rows={3}
                                placeholder="English language"  
                                onChange={handleChangeDescriptionEn}
                                required

                            />                            
                        </Form.Group>


                        <DatePicker 
                            selectedValue={startDate} 
                            onChange={e => setStartDate(e.target.value)} 
                            nameDate={'Дата Создание'}
                        />

                        <DatePicker 
                            selectedValue={endDate} 
                            onChange={e => setEndDate(e.target.value)} 
                            nameDate={'Дата окончания партнерства'}
                            />

                        <Form.Label 
                            style={{paddingTop: '2%'}}
                            >Время окончания партнерства
                        </Form.Label>

                        <TimePickers onChange={e => setDateTime(e.target.value)}/>  
 

                        <Button 
                           style={{marginTop: '2%'}}
                           variant="success"
                            type='submit'
                            onClick={createPartnersubmin}
                        >Сохранить</Button>
                </Form>

                </div>

                
            </RightNavigation>
        </>

  );
}

export default CreatePartner;