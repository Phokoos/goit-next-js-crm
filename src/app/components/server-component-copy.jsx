import React from 'react';

export default function ServerComponentCopy({ children }) {
  console.log('ServerComponentCopy');
  return (
    <div>
      <h1>Server Component Copy</h1>
      {children}
    </div>
  );
}
