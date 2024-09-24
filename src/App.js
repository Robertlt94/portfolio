import React, {useContext, useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './routes/HomePage';
import MyInfoProvider from './MyInfoProvider';
import MyInfoContext from './MyInfoContext';

function App() {

  return (
    <MyInfoProvider>
      <Router>
        <div className="main-background">
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </Router>
    </MyInfoProvider>
  );
}

export default App;
