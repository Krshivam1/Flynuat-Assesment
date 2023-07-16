import React, { useState, useEffect, useCallback } from "react";
import ShowCounter from "./ShowCounter";

// question 3. example for hooks(useState, useEffect, useCallback)

const HookExamples = () => {
  // make a state using useState hook.
  const [numbers, setNumbers] = useState<Array<number>>([]);

  // Udpate state on page load using useEffect hook.
  useEffect(() => {
    setNumbers([1, 2, 3, 4, 5]);
  }, []);

  // make state to demonstrate usage of useCallback hook.
  const [counter1, setCounter1] = useState<number>(0);
  const [counter2, setCounter2] = useState<number>(0);

  //using useCallback hook to limit re-render of ShowCounter only when its own props have changed
  const updatedCount = useCallback(() => {
    console.log(`current count is ${counter2}`);
  }, [counter2]);

  return (
    <div>
      <h2>Hooks example</h2>
      <div>
        {numbers.map((number, index) => (
          <h5 key={number}>{number}</h5>
        ))}
      </div>

      <h4>Counter 1 value is : </h4>
      <h4>{counter1}</h4>
      <button type="button" onClick={() => setCounter1(counter1 + 1)}>
        Update Counter 1
      </button>

      <h4>Counter 2 value is : </h4>
      <ShowCounter count={counter2} updatedCount={updatedCount} />
      <button type="button" onClick={() => setCounter2(counter2 + 1)}>
        Update Counter 2
      </button>
    </div>
  );
};

export default HookExamples;
