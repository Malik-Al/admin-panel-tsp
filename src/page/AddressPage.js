import React, {useState, useEffect} from 'react';
import config from '../config.json'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import RightNavigation from './RightNavigation';
import ListAddressPartners from '../component/Address/ListAddressPartners';

function AddressPage (){
    return <>
    <RightNavigation>
        <h1>Address</h1>
        <ListAddressPartners/>
    </RightNavigation>
    </>
}
  
export default AddressPage;