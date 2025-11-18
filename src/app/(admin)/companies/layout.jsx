import React from 'react';

export default function Layout({ children, header, toolbar, modal, type }) {
  return (
    <>
      {type}
      {modal}
      {header}
      <main>
        {toolbar}
        {children}
      </main>
    </>
  );
}
