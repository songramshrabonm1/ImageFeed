import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router";
import CreatePost from './pages/CreatePost';
import Feed from './pages/Feed';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CreatePost></CreatePost>}></Route>
        <Route path="/Feed" element={<Feed></Feed>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App