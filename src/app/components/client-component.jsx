'use client';

import React from 'react';

export default function ClientComponent({ children }) {
  console.log('ClientComponent');
  return (
    <div>
      <h1>Client Component</h1>
      {children}

      <h2>Server Component Copy below</h2>
    </div>
  );
}
