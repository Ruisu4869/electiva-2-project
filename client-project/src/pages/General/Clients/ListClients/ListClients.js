import React from 'react';
import { Space, Table, Tag } from 'antd';
import { ControlOutlined, DownloadOutlined, UserOutlined } from '@ant-design/icons';

export const ListClients = () => {

    const columns = [
        {
          title: 'DOC',
          dataIndex: 'id',
          key: 'id',
          render: (text) => <a>{text}</a>,
        },
        {
          title: 'Name',
          dataIndex: 'nam',
          key: 'nam',
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: 'State',
          key: 'state',
          dataIndex: 'state',
          render: (_, { state }) => (
            <>
              {state.map((states) => {
                let color = states.length > 5 ? 'geekblue' : 'green';
                if (states === 'loser') {
                  color = 'volcano';
                }
                return (
                  <Tag color={color} key={state}>
                    {states.toUpperCase()}
                  </Tag>
                );
              })}
            </>
          ),
        },
        {
          title: 'Action',
          key: 'action',
          render: (_, record) => (
            <Space size="middle">
              <a><DownloadOutlined />{record.name}</a>
              <a><UserOutlined />{record.name}</a>
              <a><ControlOutlined />{record.name}</a>
            </Space>
          ),
        },
      ];
      const data = [
        {
          key: '1',
          id: '4125395',
          nam: "Juan",
          age: '25',
          state: ['active'],
        },
        {
            key: '2',
            id: '75896632',
            nam: "Pedro",
            age: '18',
            state: ['active'],
        },
        {
            key: '3',
            id: '15236595',
            nam: "Esteban",
            age: '42',
            state: ['active'],
        },
        {
            key: '4',
            id: '106032293',
            nam: "Pilar",
            age: '32',
            state: ['active'],
        },
        {
              key: '5',
              id: '14258796',
              nam: "Alberto",
              age: '26',
              state: ['active'],
        },
        {
              key: '6',
              id: '1053212636',
              nam: "Yamileth",
              age: '20',
              state: ['active'],
        },
        {
            key: '7',
            id: '142589000',
            nam: "Arturo",
            age: '31',
            state: ['active'],
        },
        {
            key: '8',
            id: '456988716526',
            nam: "Joaquin",
            age: '23',
            state: ['active'],
        },
        {
            key: '9',
            id: '1452585555',
            nam: "Milena",
            age: '43',
            state: ['active'],
        },
        {
              key: '10',
              id: '4856932115',
              nam: "Rosario",
              age: '35',
              state: ['active'],
        },
        {
              key: '11',
              id: '144452632333',
              nam: "Diana",
              age: '20',
              state: ['active'],
        },
      ];
    
      const pagination = {
        pageSize: 5,
        total: data.length
      }

  return (
    <div>
        <Table columns={columns} dataSource={data} pagination={pagination}/>
    </div>
  )
}
