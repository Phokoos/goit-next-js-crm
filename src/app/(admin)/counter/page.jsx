import Counter from '@/app/(admin)/counter/couner';

export const metadata = {
  title: 'Counter Page',
  description: 'A simple counter page',
}

export default function CounterPage() {
  return (
    <div>
      <h1>Counter Page</h1>
      <Counter/>
    </div>
  );
}
