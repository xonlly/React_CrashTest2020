import React  from 'react';
import { useState } from 'react';
import './App.css';
//import Cat from 'react-cats';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    if (count < 50) {
      setCount(_currentCount => _currentCount + 1)
    }
  }

  const decrement = () => {
    if (count > 0) {
      setCount(_currentCount => _currentCount - 1)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>First Touch with React</h1>
        <p>{count} kitty loaded</p>
        <div>
          <button class="btn " onClick={decrement}> - </button>
          <button class="btn " onClick={increment}> + </button>
        </div>
      </header>
      <div>
        <ul class="wrapper">
          {Array.from({ length: count }).map((_, i) => (
            <li key={i}><img src="https://cataas.com/cat/gif" alt="cat"/></li>
          ))} 
        </ul>
      </div>
    </div>
  );
}

export default App;

