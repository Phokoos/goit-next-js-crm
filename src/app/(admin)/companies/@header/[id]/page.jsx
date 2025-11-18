import React from 'react';
import { getCompany } from '@/lib/api';
import getQueryClient from '@/lib/utils/getQueryClient';
import Header from '@/app/components/header';

export default async function Page({ params }) {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['companies', params.id],
    queryFn: () => getCompany(params.id, { cache: 'no-store' }),
    staleTime: 10 * 1000,
  });

  const company = queryClient.getQueryData(['companies', params.id]);

  return <Header>{company?.title}</Header>;
}
