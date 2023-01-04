import {Route, Routes} from "react-router-dom"
import Partners from "./page/Partners";
import Card from "./page/Card";
import React from 'react';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Partners/>}/>
      <Route path='/card' element={<Card/>}/>
    </Routes>
  );
}

export default App;