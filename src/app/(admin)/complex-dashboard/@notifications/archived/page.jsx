import Link from 'next/link';

export default function Page() {
  return (
    <div>
      <h1>Archived Notifications Page</h1>

      <div>
        <Link href={'/complex-dashboard'}>Notifications</Link>
      </div>
    </div>
  );
}
