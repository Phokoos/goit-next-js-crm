import Link from 'next/link';

export default function Page() {
  return (
    <div>
      <h1>Notifications Page</h1>

      <div>
        <Link
        className={'p-2 bg-blue-500 rounded-md my-3 inline-block text-white'}
          href={'/complex-dashboard/archived'}>Archived</Link>
      </div>
    </div>
  );
}
