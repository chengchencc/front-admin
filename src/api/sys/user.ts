import { httpClient } from '/@/utils/http/axios';
import { LoginParams, LoginResultModel, GetUserInfoModel } from './model/userModel';

import { ErrorMessageMode } from '/#/axios';
import { ContentTypeEnum } from '/@/enums/httpEnum';

enum Api {
  Login = '/api-uaa/oauth/token',
  Logout = '/basic-api/logout',
  GetUserInfo = '/api-user/users/current',
  GetPermCode = '/basic-api/getPermCode',
}

/**
 * @description: user login api
 */
export function loginApi(params: LoginParams, mode: ErrorMessageMode = 'modal') {
  const clientId = 'webApp';
  const clientSecret = 'webApp';
  const authorization = window.btoa(`${clientId}:${clientSecret}`);

  return httpClient.post<LoginResultModel>(
    {
      url: Api.Login,
      data: params,
      headers: {
        Authorization: `Basic ${authorization}`,
        'Content-Type': ContentTypeEnum.FORM_URLENCODED,
      },
    },
    {
      errorMessageMode: mode,
    },
  );
}

/**
 * @description: getUserInfo
 */
export function getUserInfo() {
  return httpClient.get<GetUserInfoModel>({ url: Api.GetUserInfo }, { errorMessageMode: 'none' });
}

export function getPermCode() {
  return httpClient.get<string[]>({ url: Api.GetPermCode });
}

export function doLogout() {
  return httpClient.get({ url: Api.Logout });
}
