import React, {useEffect, useState} from 'react';
import RightNavigation from './RightNavigation';
import config from '../config.json'
import axios from 'axios'
import {useLocation, useNavigate} from 'react-router-dom'
import DetailCity from '../component/City/DetailCity';
import Button from '@mui/material/Button';

function CityPage (){
    let navigate = useNavigate()
    const {search} = useLocation();
    const [city, setCity] = useState([]);
    const city_id = search.slice(1)

    useEffect(() => {
        axios.get(`${config.host.cityOne}?id=${city_id}`)
        .then(res => {
            const response = res.data.data
            setCity(response)
        })
        .catch(error => error)
      }, [city_id]);

    return <>
    <RightNavigation>
    <Button 
        style={{margin:'5px', fontSize: '15px'}} 
        variant="contained"
        color="success"
        onClick={() => navigate('/city/create')}
    >
        Добавить Город 
        </Button>
        <div>{city.map(i => 
            <div key={i.city_id}>
                <DetailCity nameCity={i.city_name}/>
             </div>
        )}</div>
    </RightNavigation>
    </>
}
  
export default CityPage;