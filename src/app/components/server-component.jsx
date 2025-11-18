import React from 'react';

export default function ServerComponent({ children }) {
  console.log('ServerComponent');
  return (
    <div>
      <h1>Server Component</h1>
      {children}
    </div>
  );
}
