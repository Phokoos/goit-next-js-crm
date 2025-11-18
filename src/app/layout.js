import './globals.css';
import { Plus_Jakarta_Sans } from 'next/font/google';
import Providers from '@/app/components/providers';
const font = Plus_Jakarta_Sans({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: 'My Next.js App',
    template: '%s | My Next.js App',
    // absolute: 'My Next.js App - The best app ever',
  },
};

export default function RootLayout({ children }) {
  console.log('rendering RootLayout at', new Date().toISOString());
  return (
    <html lang="en">
      <body className={font.className}>
        <h2>COMMON LAYOUT</h2>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
