import ServerComponent from '@/app/components/server-component';
import ClientComponent from '@/app/components/client-component';
import ServerComponentCopy from '@/app/components/server-component-copy';
import React from 'react';
import Link from 'next/link';

export default function Home() {
  // Or log a specific header
  // console.log(cookies());
  return (
    <main>
      <h1 className="text-xl">Home page: {new Date().toTimeString()}</h1>
      {/*<StatusLabel status={Status.Active}>Active</StatusLabel>*/}
      {/*<StatusLabel status={Status.NotActive}>Not Active</StatusLabel>*/}
      {/*<StatusLabel status={Status.Pending}>Pending</StatusLabel>*/}
      {/*<StatusLabel status={Status.Suspended}>Suspended</StatusLabel>*/}
      {/*<StatusLabel status={Status.Suspended} disabled>*/}
      {/*  Disabled*/}
      {/*</StatusLabel>*/}
      {/*<AddCompanyButton />*/}

      <ServerComponent />
      <ClientComponent>
        <ServerComponentCopy />
      </ClientComponent>

      {/*<MagicButton/>*/}

      <h2>Main menu</h2>
      <ul>
        <li>
          <Link href={'/stats'}>Stats</Link>
        </li>
        <li>
          <Link href={'/products'}>Products</Link>
        </li>
        <li>
          <Link href={'/articles/breaking-news-123?lang=en'}>
            Read in English
          </Link>
        </li>
        <li>
          <Link href={'/articles/breaking-news-123?lang=fr'}>
            Read in French
          </Link>
        </li>
      </ul>
    </main>
  );
}
