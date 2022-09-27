import { httpClient } from '/@/utils/http/axios';

enum Api {
  productList = '/product/page',
  dictList = '/dict/page',
}

export const getProductList = (params: any) =>
  httpClient.get<any>({ url: Api.productList, params });

export const insertProduct = (data: any) => httpClient.post<any>({ url: `/product`, data });

export const updateProduct = (data: any) => httpClient.put<any>({ url: `/product`, data });

export const deleteProduct = (id: any) => httpClient.delete<any>({ url: `/product/${id}` });

//  product tag

// export const getTagList = (params: any) => httpClient.get<any>({ url: `/tag/page`, params });

// export const insertTag = (data: any) => httpClient.post<any>({ url: `/tag`, data });

// export const updateTag = (data: any) => httpClient.put<any>({ url: `/tag`, data });

// export const deleteTag = (id: any) => httpClient.delete<any>({ url: `/tag/${id}` });

// dictionary 字典

export const getDictList = (params: any) => httpClient.get<any>({ url: Api.dictList, params });

export const insertDict = (data: any) => httpClient.post<any>({ url: `/dict`, data });

export const updateDict = (data: any) => httpClient.put<any>({ url: `/dict`, data });

export const deleteDict = (id: any) => httpClient.delete<any>({ url: `/dict/${id}` });

export const getDictByType = (type: any) =>
  httpClient.get<any>({ url: `/dict/items/type/${type}` });
