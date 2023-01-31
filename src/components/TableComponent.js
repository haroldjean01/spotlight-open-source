import { Table, Column, HeaderCell, Cell } from 'rsuite-table';
import 'rsuite-table/lib/less/index.less';
import 'rsuite-table/dist/css/rsuite-table.css';

import React from 'react';

export default function TableComponent() {
  const dataList = [
    { id: 1, name: 'a', email: 'a@email.com', avartar: '...' },
    { id: 2, name: 'b', email: 'b@email.com', avartar: '...' },
    { id: 3, name: 'c', email: 'c@email.com', avartar: '...' },
  ];
  return (
    <Table data={dataList}>
      <Column width={100} sortable fixed resizable>
        <HeaderCell>ID</HeaderCell>
        <Cell dataKey="id" />
      </Column>

      <Column width={100} sortable resizable>
        <HeaderCell>Name</HeaderCell>
        <Cell dataKey="name" />
      </Column>

      <Column width={100} sortable resizable>
        <HeaderCell>Email</HeaderCell>
        <Cell></Cell>
      </Column>

      <Column width={100} resizable>
        <HeaderCell>Avatar</HeaderCell>
      </Column>
    </Table>
  );
}
