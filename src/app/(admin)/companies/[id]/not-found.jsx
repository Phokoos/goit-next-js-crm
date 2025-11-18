import React from 'react';
import Link from 'next/link';

export default function NotFound({}) {
  {
    return (
      <div>
        <h1>Company Not Found</h1>
        <Link href="/companies" className={'text-blue-500'}>
          Back to companies
        </Link>
      </div>
    );
  }
}
