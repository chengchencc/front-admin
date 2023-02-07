import {
  AccountParams,
  DeptListItem,
  MenuParams,
  RoleParams,
  RolePageParams,
  MenuListGetResultModel,
  DeptListGetResultModel,
  AccountListGetResultModel,
  RolePageListGetResultModel,
  RoleListGetResultModel,
} from './model/systemModel';
import { httpClientWithSolvedResponse } from '/@/utils/http/axios';

enum Api {
  AccountList = '/basic-api/system/getAccountList',
  IsAccountExist = '/basic-api/system/accountExist',
  DeptList = '/basic-api/system/getDeptList',
  setRoleStatus = '/basic-api/system/setRoleStatus',
  MenuList = '/basic-api/system/getMenuList',
  RolePageList = '/basic-api/system/getRoleListByPage',
  GetAllRoleList = '/basic-api/system/getAllRoleList',
}

export const getAccountList = (params: AccountParams) =>
  httpClientWithSolvedResponse.get<AccountListGetResultModel>(
    { url: Api.AccountList, params },
    { isTransformResponse: true },
  );

export const getDeptList = (params?: DeptListItem) =>
  httpClientWithSolvedResponse.get<DeptListGetResultModel>({ url: Api.DeptList, params });

export const getMenuList = (params?: MenuParams) =>
  httpClientWithSolvedResponse.get<MenuListGetResultModel>({ url: Api.MenuList, params });

export const getRoleListByPage = (params?: RolePageParams) =>
  httpClientWithSolvedResponse.get<RolePageListGetResultModel>({ url: Api.RolePageList, params });

export const getAllRoleList = (params?: RoleParams) =>
  httpClientWithSolvedResponse.get<RoleListGetResultModel>({ url: Api.GetAllRoleList, params });

export const setRoleStatus = (id: number, status: string) =>
  httpClientWithSolvedResponse.post({ url: Api.setRoleStatus, params: { id, status } });

export const isAccountExist = (account: string) =>
  httpClientWithSolvedResponse.post(
    { url: Api.IsAccountExist, params: { account } },
    { errorMessageMode: 'none' },
  );
