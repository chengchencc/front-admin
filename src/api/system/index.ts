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
} from './systemModel';
import { httpClient } from '/@/utils/http/axios';

const userServiceName = '/api-user';

const Api = {
  AccountList: '/basic-api/system/getAccountList',
  IsAccountExist: '/basic-api/system/accountExist',
  DeptList: '/basic-api/system/getDeptList',
  setRoleStatus: '/basic-api/system/setRoleStatus',
  MenuList: `${userServiceName}/findAlls`,
  RolePageList: `${userServiceName}/roles`,
  GetAllRoleList: '/basic-api/system/getAllRoleList',
};

export const getAccountList = (params: AccountParams) =>
  httpClient.get<AccountListGetResultModel>({ url: Api.AccountList, params });

export const getDeptList = (params?: DeptListItem) =>
  httpClient.get<DeptListGetResultModel>({ url: Api.DeptList, params });

export const getMenuList = (params?: MenuParams) =>
  httpClient.get<MenuListGetResultModel>({ url: Api.MenuList, params });

export const getRoleListByPage = (params?: RolePageParams) =>
  httpClient.get<RolePageListGetResultModel>({ url: Api.RolePageList, params });

export const getAllRoleList = (params?: RoleParams) =>
  httpClient.get<RoleListGetResultModel>({ url: Api.GetAllRoleList, params });

export const setRoleStatus = (id: number, status: string) =>
  httpClient.post({ url: Api.setRoleStatus, params: { id, status } });

export const isAccountExist = (account: string) =>
  httpClient.post({ url: Api.IsAccountExist, params: { account } }, { errorMessageMode: 'none' });
