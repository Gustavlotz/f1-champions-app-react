import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import LandingPage from './pages/LandingPage'
import NotFound from './components/notfound/NotFound';


const App = () => { 
  return ( 
    <BrowserRouter>
      <div className="App">
        <Routes>
          {/* Use 'element' prop to specify the component */}
          <Route path="/" element={<LandingPage />} />
           {/* Route for Not Found page - render NotFound component for any unmatched route */}
           <Route path='*' element={<NotFound/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
