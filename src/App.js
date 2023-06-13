import React from 'react';
import ReactDom from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Blogs from './pages/Blogs';
import Home from './pages/Home';
import Layout from './pages/Layout';
import NotFound from './pages/NotFound';
import './style.css';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<Home />} />
        <Route path="/Blogs" element={<Blogs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
