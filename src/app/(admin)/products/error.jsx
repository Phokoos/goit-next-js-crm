'use client';

import { useRouter } from 'next/navigation';
import { startTransition } from 'react';

export default function ErrorBoundary({ error, reset }) {
  const router = useRouter();
  const reload = () => {
    startTransition(() => {
      router.refresh()
      reset();
    })

  }

  return (
    <div>
      <h2>Something went wrong while loading the review.</h2>

      <button
        className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
        onClick={reload}
      >
        Try Again
      </button>
    </div>
  );
}
