import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './home';
import About from '../pages/About';
import NotMatch from '../pages/NotMatch';
import Navbar from './Navbar';
import SinglePage from '../pages/SinglePage';

function TodoContainer() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/to-do-app-react" element={<HomePage />} />
        <Route path="/about" element={<About />}>
          <Route path=":slug" element={<SinglePage />} />
        </Route>
        <Route path="*" element={<NotMatch />} />
      </Routes>

    </div>

  );
}

export default TodoContainer;
