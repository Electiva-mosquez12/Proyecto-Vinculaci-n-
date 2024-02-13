//import logo from './logo.svg';
//import './App.css';

/*function App() {
  return (
    <div>
      Hello world
    </div>
  );
}
*/
//export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './components/SignIn';
import Dashboard from './components/Dashboard';
import Start from './components/Start';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/" element={<Start />} />
      </Routes>
    </Router>
  );
};

export default App;

