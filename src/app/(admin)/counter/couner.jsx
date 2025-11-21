'use client';

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  const [error, setError] = useState(null);

  const makeError = () => {
    setError(new Error('Counter error'));
  };

  if (error) throw error; // Викидається під час рендерингу

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={makeError}>Make Error</button>
    </div>
  );
}
