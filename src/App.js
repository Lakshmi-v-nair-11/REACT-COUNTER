import { useState } from 'react';
import './App.css';

function App() {
  const [count, setcount] = useState(0)
  function incr() {
    setcount(count + 1)
  }
  function decr() {
    setcount(count - 1)
  }
  function reset() {
    setcount(0)
  }
  return (
    <div className='App' >
      <button onClick={decr}>-</button>
      <span>{count}</span>
      <button onClick={incr}>+</button>
      <button onClick={reset}>RESET</button>
    </div>
  );
}

export default App;
