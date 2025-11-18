import React from 'react';
import Sidebar from '@/app/components/sidebar';

export default function Layout({ children }) {
  return (
    <div>
      <Sidebar />
      <div className={'ml-60'}>{children}</div>
    </div>
  );
}
