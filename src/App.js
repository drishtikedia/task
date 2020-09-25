import React from 'react';
import './App.scss';
import { Header } from './Components/Header/Header';
import { Footer } from './Components/Footer/Footer';
const App = () => {
  return (
    <div className='container'>
      <Header />
      <Footer />
    </div>
  );
};

export default App;
