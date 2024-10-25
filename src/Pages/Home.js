import React from 'react';
import Header from '../Componants/Header.js';
import Main from '../Componants/Main.js';
import Footer from '../Componants/Footer.js';

export default function Home(){
  return (
    <div className="homepage">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}
