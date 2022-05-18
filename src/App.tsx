import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import DetailsPage from './components/DetailsPage';
import Homepage from './components/homepage';

function App() {
  return (
    <div className="App">
       <Routes>
         <Route path={'/details-page/:id'} element={<DetailsPage/>} />
         <Route path={'/'} element={<Homepage/>} />
       </Routes>
      
    </div>
  );
}

export default App;
