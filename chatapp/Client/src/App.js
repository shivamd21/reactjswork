import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route } from 'react-router-dom'
import Join from './Component/Join';
import Chat from './Component/Chat';

function App() {
  return (
    <div className="container App">
    <BrowserRouter>
    <Route exact path="/" component={Join} />
    <Route  path="/chat/:name/:room" component={Chat} />
    </BrowserRouter>
    </div>
  );
}

export default App;
