import React from 'react';
import RightNavigation from '../../page/RightNavigation';
import PartnerItem from './PartnersItem';
import {useState, useEffect} from 'react';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import SpinnerComponent from '../SpinnerComponent';
import config from '../../config.json'


function Partners (){
    const [data, setData] = useState([]);
    let navigate = useNavigate()

    useEffect(() => {
        axios.get(config.host.partners)
        .then(res => {
            const response = res.data.data
            setData(response)
        })
        .catch(error => error)
     
      }, []);

      return (<>
            <RightNavigation>
                <Button 
                    style={{margin:'5px', fontSize: '15px'}} 
                    variant="contained"
                    color="success"
                    onClick={() => navigate('/partner/create')}
                >
                    Добавить партнера 
                 </Button>

                <div style={{ 
                    display: 'flex', 
                    flexWrap: 'wrap',
                    }}>
                    { 
                        data.length 
                        ?
                        data.map(person => 
                            <PartnerItem key={person.partner_id} partner={person}/>
                        )
                        : 
                        <SpinnerComponent/>
                    }
                </div>
            </RightNavigation>
            </>
     )
      
} 


  
export default Partners;