import React from 'react';
import RightNavigation from '../../page/RightNavigation';
import {useLocation} from 'react-router-dom'
import {useState, useEffect} from 'react';
import PartnerDetailsPage from '../../page/PartnerDetailsPage';
import axios from 'axios'

function PartnersDetail() {
  const [patrner, setPatrner] = useState([]);
  const {search} = useLocation();
  const patrner_id = search.slice(1)

  useEffect(() => {
      axios.get(`http://localhost:8029/api/partner?id=${patrner_id}`)
      .then(res => {
          const response = res.data.data
          setPatrner(response)
      })
      .catch(error => error)
   
    }, [patrner_id]);


  return (
    <>
    <RightNavigation>
        <div>
        { 
            patrner.map(person => 
              <PartnerDetailsPage key={person} partner={person}/>
            )
        }
        </div>
        
    </RightNavigation>
    </>
  );
}

export default PartnersDetail;