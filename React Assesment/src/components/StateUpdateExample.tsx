import React, { useState } from "react";


//question 2. ) use hooks to get update regarding any state value into function component
const StateUpdateExample = () => {
  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<string>("");
  return (
    <div>
      <h2>Sate update example</h2>
      <h5>Hi, {name}</h5>
      <input
        type="text"
        value={name}
        placeholder="Enter Name"
        onChange={(e) => setName(e.target.value)}
      />

      <h5>current count is: {count}</h5>
      <button type="button" onClick={() => setCount(count + 1)}>Update Count</button>
      <button type="button" onClick={() => setCount(0)}>Reset Count</button>
    </div>
  );
};

export default StateUpdateExample;
