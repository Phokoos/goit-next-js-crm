'use client';

import React from 'react';

export default function ErrorComponent({ error, reset }) {
  return (
    <div>
      <p>{`Something went wrong: ${error.message}`}</p>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
