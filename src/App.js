import {Route, Routes} from "react-router-dom"
import Partners from "./component/Partner/PartnersList";
import Card from "./page/Card";
import PartnersDetails from "./component/Partner/PartnerDetails";
import CreatePartner from "./component/Partner/CreatePartner";
import React from 'react';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Partners/>}/>
      <Route path='/card' element={<Card/>}/>
      <Route path='/partner/details' element={<PartnersDetails/>}/>
      <Route path='/partner/create' element={<CreatePartner/>}/>
    </Routes>
  );
}

export default App;