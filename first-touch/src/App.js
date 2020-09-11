import React  from 'react';
import { useState } from 'react';
import './App.css';
//import Cat from 'react-cats';

function App() {

  const [count, setCount] = useState(0);
  let cats = [];

  for (let i = 0; i < count; i++) {
    cats.push(<li><img src="https://cataas.com/cat/gif" alt="cat"/></li>);
   // cats.push(<Cat type = '' text = '%20' fontSize = '50' color = 'white' filter = '' width = '' height = ''/>);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>First Touch with React</h1>
        <p>{count} kitty loaded</p>
        <div>
          <button class="btn " onClick={ () => (count > 0) ? setCount(count - 1) : count }> - </button>
          <button class="btn " onClick={ () => (count < 50) ? setCount(count + 1) : count }> + </button>
        </div>
      </header>
      <div>
        <ul class="wrapper">
          {cats} 
        </ul>
      </div>
    </div>
  );
}

export default App;

