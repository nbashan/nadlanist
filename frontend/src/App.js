import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/hello')
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Nadlanist</h1>
        <p>Your gateway to innovative real estate solutions.</p>
        <p>{message}</p>
        <a
          className="App-link"
          href="https://www.nadlanist.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Explore Our Website
        </a>
      </header>
    </div>
  );
}

export default App;
