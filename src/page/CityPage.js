import React from 'react';
import RightNavigation from './RightNavigation';

function CityPage ({id}){
    return <>
    <RightNavigation>
        <h1>City</h1>
        <p>{id}</p>
    </RightNavigation>
    </>
}
  
export default CityPage;