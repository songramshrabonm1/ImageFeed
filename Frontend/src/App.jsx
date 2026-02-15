import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router";
import CreatePost from './pages/CreatePost';
import Feed from './pages/Feed';
import Edited from './pages/Edited';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CreatePost></CreatePost>}></Route>
        <Route path="/Feed" element={<Feed></Feed>}></Route>
        <Route path="/Edited/:id" element={<Edited></Edited>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App