import React from 'react';
import RightNavigation from './RightNavigation';
import PartnerItem from '../component/PartnersItem';
import {useState, useEffect} from 'react';
import axios from 'axios'

function Partners (){
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8029/api/partner')
        .then(res => {
            const response = res.data.data
            setData(response)
        })
        .catch(error => error)
     
      }, []);

      return (<>
            <RightNavigation>
                <h1 style={{padding:'2%'}}>Партнеры</h1>
                <div style={{
                        display: 'flex', 
                        flexWrap: 'wrap',
                    }}>
                    { 
                        data.map(per => 
                            <PartnerItem key={per.partner_id} partner={per}/>
                        )
                    }
                </div>
            </RightNavigation>
            </>
            )
      
} 


  
export default Partners;