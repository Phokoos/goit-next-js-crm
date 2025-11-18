'use client';

import Link from 'next/link';
import { use } from 'react';

export default function Article({ params, searchParams }) {
  const { articleId } = use(params);
  const { lang = 'en' } = use(searchParams);

  console.log(lang);

  return (
    <div>
      <h2 className={'mb-2'}>Article {articleId}</h2>

      <p>Reading in language ({lang})</p>
      <div>
        <Link href={`/articles/${articleId}?lang=en`}>English</Link>
        <Link href={`/articles/${articleId}?lang=es`}>Spain</Link>
        <Link href={`/articles/${articleId}?lang=fr`}>France</Link>
      </div>
    </div>
  );
}
