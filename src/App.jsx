// React
import React, { useMemo } from 'react';
import { Routes, Route } from 'react-router-dom';

// Style
// import './scss/main.scss';

// Paginas
import Index from './pages/Index';
import Draft from './pages/Draft';
// import PhoneTest from './pages/PhoneTest';

function App() {

  const routes = useMemo(() => {

    return (
      <>
        <Route path="/" element={<Index />} />
        <Route path="/draft" element={<Draft />} />
      </>
    );
  }, []);

  return (
    <Routes>
      {routes}
    </Routes>
  );
}

export default App;