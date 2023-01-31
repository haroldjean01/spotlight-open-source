import { Table, Column, HeaderCell, Cell } from 'rsuite-table';
import 'rsuite-table/lib/less/index.less';
import 'rsuite-table/dist/css/rsuite-table.css';

import React from 'react';

export default function TableComponent() {
  const dataList = [
    { id: 1, name: 'Jess', email: 'a@email.com', avatar: 'foo', occupation: 'doctor' },
    {
      id: 2,
      name: 'Mark',
      email: 'b@email.com',
      avatar: 'bar',
      occupation: 'full stack developer',
    },
    { id: 3, name: 'Mary', email: 'c@email.com', avatar: 'bill', occupation: 'ice skater' },
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
        <Cell dataKey="avatar" />
      </Column>

      <Column width={100} resizable>
        <HeaderCell>Occupation</HeaderCell>
        <Cell dataKey="occupation" />
      </Column>
    </Table>
  );
}
