
import React from 'react';
import './App.css';

import Posts from './components/Posts';
import Users from './components/Users';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Redux CRUD App</h1>
      </header>
      <div className="container">
        <Posts />
        <Users />
      </div>
    </div>
  );
}

export default App;
