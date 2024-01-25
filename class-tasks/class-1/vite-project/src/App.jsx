import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div style={{ textAlign: 'center', padding: '20px' }}>

        <h1>{count}</h1>
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
          <button style={{ padding: '10px', color: 'white', backgroundColor: 'black', border: "0", borderRadius: "5px" }} onClick={() => setCount((count) => count + 1)}>
            Add
          </button>
          <button style={{ padding: '10px', color: 'white', backgroundColor: 'red', border: "0", borderRadius: "5px" }} onClick={() => setCount((count) => count - 1)}>
            Substract
          </button>
          <button style={{ padding: '10px', color: 'white', backgroundColor: 'gray', border: "0", borderRadius: "5px" }} onClick={() => setCount((count) => count = 0)}>
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
