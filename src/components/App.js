


import React from "react";
import './../styles/App.css';
import React, { useState } from 'react';

function ButtonClickCounter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }


const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        <button onClick={handleClick}>Click me</button>
      <p>Button clicked {count} times</p>
    </div>
  )
}
}
export default App
