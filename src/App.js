import React from 'react';

//Import react router dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';

import Homepage from './pages/Homepage';
import MoviesPages from './pages/Movies';

const App = () =>  {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/movies" element={<MoviesPages/>} />
        {/* {
          data.map((item, index) => {
            return (
              <Route key={index} path={`/detail/${item.name}`} element={<DetailPage data={data} item={item} />} />
            )
          }
        )} */}
      </Routes>
    </BrowserRouter>  
  );
}

export default App;
