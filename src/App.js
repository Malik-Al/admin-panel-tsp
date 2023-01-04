import {Route, Routes} from "react-router-dom"
import Partners from "./page/Partners";
import Card from "./page/Card";
import PartnersDetails from "./component/PartnerDetails";
import React from 'react';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Partners/>}/>
      <Route path='/card' element={<Card/>}/>
      <Route path='/detailed' element={<PartnersDetails/>}/>
    </Routes>
  );
}

export default App;