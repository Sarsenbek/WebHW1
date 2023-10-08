import logo from './logo.svg';
import React, { useState, useEffect } from 'react'; //Hooks
import './App.css';
import Component from './Component.js'; //To Component.js added memoization
import withLogger from './withLogger.js'; //Higher Order Component

const EnhancedComponent = withLogger(Component); //lifecycle methods

function App() {
  const [count, setCount] = useState(0); //Hook

  useEffect(() => { //Hook
    document.title = `Count: ${count}`; 
  }, [count]);

  const handleIncrement = () => { //Added Event handler function
    setCount(count + 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        <EnhancedComponent name="Bermagambet Duisek" />
        </p>
        <h1>Count: {count}</h1>
        <button onClick={handleIncrement}>Increment</button> 
      </header>
    </div>
  );
}

export default App;
