import React, {useEffect, useState} from 'react';
import RightNavigation from './RightNavigation';
import config from '../config.json'
import axios from 'axios'
import {useLocation} from 'react-router-dom'


function CityPage (){
    const {search} = useLocation();
    const [city, setCity] = useState([]);
    const city_id = search.slice(1)
    console.log('CityPage city_id', city_id);

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
        <p>City</p>
        <div>{city.map(i => 
            <div key={i.city_id}>
                <p>  {i.city_id}</p>
                <p>  {i.city_name['ru-RU']}</p>
                <p>  {i.city_name['ky-KG']}</p>
                <p>  {i.city_name['en-US']}</p>
             </div>
        )}</div>
    </RightNavigation>
    </>
}
  
export default CityPage;