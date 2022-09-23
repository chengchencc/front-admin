import { httpClient } from '/@/utils/http/axios';

enum Api {
  productList = '/product/page',
  dictList = '/dict/page',
}

export const getProductList = (params: any) =>
  httpClient.get<any>({ url: Api.productList, params });

export const getDictList = (params: any) => httpClient.get<any>({ url: Api.dictList, params });

export const insertDict = (data: any) => httpClient.post<any>({ url: `/dict`, data });

export const updateDict = (data: any) => httpClient.put<any>({ url: `/dict`, data });

export const deleteDict = (id: any) => httpClient.delete<any>({ url: `/dict/${id}` });
