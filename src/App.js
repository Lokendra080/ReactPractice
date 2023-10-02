import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import NavBar from './components/NavBar';

import Content from './components/Content';
function App() {
  return (
    <div className="App">
        
       
        <Header/>
        <NavBar />
        <Content />
        <hr />
        <Footer/>
    </div>
  );
}

export default App;
