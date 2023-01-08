import React,{useState} from 'react';
import RightNavigation from '../../page/RightNavigation';
import FormInput from '../Partner/FormInput';
import Button from 'react-bootstrap/Button';
// import axios from 'axios';
// import config from '../../config.json'
// import {useNavigate} from 'react-router-dom'

function CreateCity (){
    // let navigate = useNavigate()
    const [cityRu, setCityRu] = useState('')
    const [cityKg, setCityKG] = useState('')
    const [cityEn, setCityEn] = useState('')


    function createCategorySubmit(){
        const data = {
            city_name: {
                "ru-RU": cityRu,
                "ky-KG": cityKg,
                "en-US": cityEn
            }
        }

        console.log('data', data)

        // axios.post(config.host.cityOne, data)
        // .then(res => {
        //     const response = res.data.data
        //     navigate('/city')
        //     console.log('response', response)
        // })
        // .catch(error => error)
    }

    return <>
    <RightNavigation>
    <h1 style={{textAlign: 'center'}}>Создание города</h1>
        <div style={{ 
                    padding: '4%', 
                    margin: '3%', 
                    border:'1px solid rgba(0,0,0,0.3)' , 
                    borderRadius: '3px'
                }}>

            <FormInput 
                handlerEn={(e) => setCityEn(e.target.value)} 
                handlerKg={(e) => setCityKG(e.target.value)} 
                handlerRu={(e) => setCityRu(e.target.value)} 
                title={'Введите название города'} 
            />
            <Button 
                style={{marginTop: '2%'}}
                variant="success"
                type='submit'
                onClick={createCategorySubmit}
            >Сохранить</Button> 

        </div>
    </RightNavigation>

    </>
}
  
export default CreateCity;