import { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import './App.css';
import Nav from './components/UI/Nav';
import Sidebar from './components/UI/sidebar';
import Main from './components/UI/Main';
import Home from './pages/Home';

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Nav />
      <Sidebar />
      <Main>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Main>
    </BrowserRouter>
  );
}

export default App;
