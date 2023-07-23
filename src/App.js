import React from 'react';
import Counter from "./closure";
import BlackJack from "./BlackJack.jsx";

function App() {
  return (
    <div className="App">
      <Counter button="1" />
      <Counter button="2" />
      <BlackJack />
    </div>
  );
}

export default App;
