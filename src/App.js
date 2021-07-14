import React, { useState, useEffect } from 'react';
import { Footer } from './components/Footer';
import { GifList } from './components/GifList';
import { Header } from './components/Header';
import { Route } from 'wouter';

function App() {
  
  const [ keyword, setKeyword ] = useState('Saint Seiya');

  return (
    <>
      <Header setKeyword={ setKeyword }/>
      <GifList keyword={ keyword } />
      <Footer />

      <Route path="/gif/:keyword" component={ GifList } />
    </>
  );
}

export default App;