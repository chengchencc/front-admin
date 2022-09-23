import { httpClient } from '/@/utils/http/axios';

export const getFileList = (params: any) => httpClient.get<any>({ url: `/file/page`, params });
