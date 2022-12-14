import { httpClient } from '/@/utils/http/axios';
import { DemoOptionsItem, selectParams } from './model/optionsModel';
enum Api {
  OPTIONS_LIST = '/basic-api/select/getDemoOptions',
}

/**
 * @description: Get sample options value
 */
export const optionsListApi = (params?: selectParams) =>
  httpClient.get<DemoOptionsItem[]>({ url: Api.OPTIONS_LIST, params });
