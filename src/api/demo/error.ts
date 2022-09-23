import { httpClient } from '/@/utils/http/axios';

enum Api {
  // The address does not exist
  Error = '/basic-api/error',
}

/**
 * @description: Trigger ajax error
 */

export const fireErrorApi = () => httpClient.get({ url: Api.Error });
