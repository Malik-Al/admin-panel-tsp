import React from 'react';
import RightNavigation from '../../page/RightNavigation';
import PartnerItem from './PartnersItem';
import {useState, useEffect} from 'react';
import axios from 'axios'

function Partners (){
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8029/api/partners')
        .then(res => {
            const response = res.data.data
            setData(response)
        })
        .catch(error => error)
     
      }, []);

      return (<>
            <RightNavigation>
                <h1 style={{padding:'2%'}}>Партнеры</h1>
                <div style={{display: 'flex', flexWrap: 'wrap'}}>
                    { 
                        data.map(person => 
                            <PartnerItem key={person.partner_id} partner={person}/>
                        )
                    }
                </div>
            </RightNavigation>
            </>
     )
      
} 


  
export default Partners;