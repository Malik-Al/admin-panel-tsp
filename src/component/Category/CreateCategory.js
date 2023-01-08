import React, { useState } from 'react';
import RightNavigation from '../../page/RightNavigation';
import Form from 'react-bootstrap/Form';
import FormInput from '../Partner/FormInput';
import FormInputImg from './FormInputImg';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import config from '../../config.json'



function CreateCategory() {
    let navigate = useNavigate()
    const [categoruRu, setCategoryRu] = useState('')
    const [categoruKg, setCategoryKg] = useState('')
    const [categoruEn, setCategoryEn] = useState('')

    const [iosImg, setIosImg] = useState('')
    const [androidImg, setAndroidImg] = useState('')

    const createCategorySubmin = () => {
        const nameCategory = {
            'ru-RU': categoruRu,
            'ky-KG': categoruKg,
            'en-US': categoruEn
        }
        const formData = new FormData()
        formData.append('category_name', JSON.stringify(nameCategory))
        formData.append('ios', iosImg)
        formData.append('android', androidImg)

        console.log('formData', formData.get('ios'));

        const headers ={
            headers: {
                'Content-Type': 'multipart/form-data'
              }
        }

        axios.post(config.host.category, formData, headers)
        .then(res => {
            const response = res.data.data
            navigate('/category')
            console.log('response',response)
        })
        .catch(error => error)
        
    
    }  
    

  return (
    <>
    <RightNavigation>
        <h1 style={{textAlign: 'center'}}>Создание категорий</h1>
        <div style={{ 
                    padding: '4%', 
                    margin: '3%', 
                    border:'1px solid rgba(0,0,0,0.3)' , 
                    borderRadius: '3px'
                }}>

                <Form >
                    <FormInputImg handler={e => setIosImg(e.target.files[0])} title={'Выберите иконку для ios'}/>
                    <FormInputImg handler={e => setAndroidImg(e.target.files[0])} title={'Выберите иконку для android'}/>
                    <FormInput 
                            handlerRu={(e) => setCategoryRu(e.target.value)} 
                            handlerEn={(e) => setCategoryEn(e.target.value)}
                            handlerKg={(e) => setCategoryKg(e.target.value)}
                            title={'Название категорий'}
                            />        

                        <Button 
                            style={{marginTop: '2%'}}
                            variant="success"
                            type='submit'
                            onClick={createCategorySubmin}
                        >Сохронить</Button>        
                </Form>



                </div>

    </RightNavigation>
    </>
  );
}

export default CreateCategory;