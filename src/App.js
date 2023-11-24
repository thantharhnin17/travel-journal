import logo from './logo.svg';
import './App.css';
import React from 'react';
import { ReactDOM } from 'react';
import Nav from './components/Nav';
import Card from './components/Card';

import Data from './Data';

function App() {
  const cards = Data.map(data => {
    return (
      <Card 
        key = {data.id}
        {...data}
      />
    )
  })

  return (
    <div className="App">
      <Nav />
      <div className='card-container'>
        {cards}
      </div>
    </div>
  );
}

export default App;
