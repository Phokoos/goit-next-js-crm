// export interface SummaryStats {
//   promotions: number;
//   categories: number;
//   newCompanies: number;
//   activeCompanies: number;
// }
//
// export interface SummarySales {
//   id: string;
//   companyId: string;
//   companyTitle: string;
//   sold: number;
//   income: number;
// }
//
// export interface Country {
//   id: string;
//   title: string;
// }
//
// export interface Category {
//   id: string;
//   title: string;
// }
//
// export enum CompanyStatus {
//   Active = 'active',
//   NotActive = 'notActive',
//   Pending = 'pending',
//   Suspended = 'suspended',
// }
//
// export interface Company {
//   id: string;
//   title: string;
//   description: string;
//   status: CompanyStatus;
//   joinedDate: string;
//   hasPromotions: boolean;
//   categoryId: string;
//   categoryTitle: string;
//   countryId: string;
//   countryTitle: string;
//   avatar?: string;
// }
//
// export interface Promotion {
//   id: string;
//   title: string;
//   description: string;
//   discount: number;
//   companyId: string;
//   companyTitle: string;
//   avatar?: string;
// }

export const CompanyStatus = {
  Active: 'active',
  NotActive: 'notActive',
  Pending: 'pending',
  Suspended: 'suspended',
};

const PROJECT_TOKEN = process.env.NEXT_PUBLIC_PROJECT_TOKEN;

const buildUrl = (...paths) =>
  `https://${PROJECT_TOKEN}.mockapi.io/${paths.join('/')}`;

const stringifyQueryParams = (params) => new URLSearchParams(params).toString();

const sendRequest = async (url, init) => {
  const res = await fetch(url, init);
  if (!res.ok) {
    throw new Error(await res.text());
  }

  return await res.json();
};

export const getSummaryStats = (init) => {
  return sendRequest(buildUrl('summary-stats', '1'), init);
};

export const getSummarySales = (init) => {
  return sendRequest(buildUrl('summary-sales'), init);
};

export const getCountries = (init) => {
  return sendRequest(buildUrl('countries'), init);
};

export const getCategories = (init) => {
  return sendRequest(buildUrl('categories'), init);
};

export const getCompanies = (init) => {
  return sendRequest(buildUrl('companies'), init);
};

export const getCompany = (id, init) => {
  return sendRequest(buildUrl('companies', id), init);
};

export const getPromotions = async (params, init) => {
  return sendRequest(
    `${buildUrl('promotions')}?${stringifyQueryParams(params)}`,
    init,
  );
};
