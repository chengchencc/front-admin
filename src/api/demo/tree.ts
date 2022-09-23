import { httpClient } from '/@/utils/http/axios';

enum Api {
  TREE_OPTIONS_LIST = '/basic-api/tree/getDemoOptions',
}

/**
 * @description: Get sample options value
 */
export const treeOptionsListApi = (params?: Recordable) =>
  httpClient.get<Recordable[]>({ url: Api.TREE_OPTIONS_LIST, params });
