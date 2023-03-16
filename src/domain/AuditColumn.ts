import { formatToDate, formatToDateTime } from '../utils/dateUtil';
import { BasicColumn } from '/@/components/Table';

export const auditColumns: BasicColumn[] = [
  {
    title: '创建时间',
    dataIndex: 'creationTime',
    width: 180,
    format: (text) => formatToDateTime(text),
  },
  // {
  //   title: '创建者',
  //   dataIndex: 'creationUserId',
  //   width: 180,
  // },
  // {
  //   title: '最后修改时间',
  //   dataIndex: 'lastModifyTime',
  //   width: 180,
  // },
  // {
  //   title: '最后修改者',
  //   dataIndex: 'lastModifyUserId',
  //   width: 180,
  // },
  // {
  //   title: '删除时间',
  //   dataIndex: 'deletionTime',
  //   width: 180,
  // },
  // {
  //   title: '删除者',
  //   dataIndex: 'deletionUserId',
  //   width: 180,
  // },
];
