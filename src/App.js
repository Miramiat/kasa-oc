import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import About from './pages/About';
import ApartmentDscrpt from './pages/ApartmentDscrpt';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/apartments/:id" element={<ApartmentDscrpt />} />
          <Route component={NotFound} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

