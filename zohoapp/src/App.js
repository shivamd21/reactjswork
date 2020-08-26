import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/footer';
import Allapps from './Components/Allapps';
import Featuredapps from './Components/Featuredapps';
import Bundleapps from './Components/Bundleapps';

function App() {
  return (
    <div className="container-fluid content">
     <Navbar/>
     <div className="container">
       <Home/>
      </div>
    <Footer/>
    </div>
  );
}

export default App;
