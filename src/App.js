import React from 'react';

//Import react router dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';

import Homepage from './pages/Homepage';
import Login from './pages/Login';
import MoviesPages from './pages/Movies';
import FavoritesPages from './pages/Favorites';
import BookmarkPages from './pages/Bookmark';
import DetailPages from './pages/Details';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/movies" element={<MoviesPages />} />
        <Route path="/favorites" element={<FavoritesPages />} />
        <Route path="/bookmark" element={<BookmarkPages />} />
        <Route path={`/detail/:id`} element={<DetailPages />} />
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
