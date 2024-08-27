import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './routes/HomePage';
import RobertProvider from './MyInfoProvider';

function App() {

  return (
    <RobertProvider>
      <Router>
        <div className="main-background">
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </Router>
    </RobertProvider>
  );
}

export default App;
