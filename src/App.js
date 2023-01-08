import {Route, Routes} from "react-router-dom"
import Partners from "./component/Partner/PartnersList";
import CardPage from "./page/CardPage";
import PartnersDetails from "./component/Partner/PartnerDetails";
import CreatePartner from "./component/Partner/CreatePartner";
import CategoryPage from "./page/CategoryPage";
import CityPage from "./page/CityPage";
import AddressPage from "./page/AddressPage";
import CreateCategory from "./component/Category/CreateCategory";
import React from 'react';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Partners/>}/>
      <Route path='/card' element={<CardPage/>}/>
      <Route path='/city' element={<CityPage/>}/>
      <Route path='/category' element={<CategoryPage/>}/>
      <Route path='/category/create' element={<CreateCategory/>}/>
      <Route path='/address' element={<AddressPage/>}/>
      <Route path='/partner/details' element={<PartnersDetails/>}/>
      <Route path='/partner/create' element={<CreatePartner/>}/>
    </Routes>
  );
}

export default App;