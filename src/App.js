import React from 'react';

import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Skills from './Components/Skills/Skills';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Skills></Skills>
      <Footer/>
    </div>
  );
}

export default App;
