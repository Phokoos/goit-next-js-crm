export const metadata = {
  title: {
    template: '%s | My Next.js App',
  },
  description: 'Layout for authentication pages',
};

export default function AuthLayout({ children }) {
  return (
    <div>
      <h1>Auth Layout</h1>
      {children}
    </div>
  );
}
