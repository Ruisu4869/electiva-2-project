import React from 'react'
import { Space, Table, Tag } from 'antd';
import { ControlOutlined, DownloadOutlined, UserOutlined } from '@ant-design/icons';

const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Product',
      dataIndex: 'product',
      key: 'product',
    },
    {
      title: 'Count',
      dataIndex: 'count',
      key: 'count',
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
      id: '1',
      product: "Carpa",
      count: '5',
      state: ['active'],
    },
    {
        key: '2',
        id: '2',
        product: "Riñonera",
        count: '6',
        state: ['active'],
    },
    {
        key: '3',
        id: '3',
        product: "Termo",
        count: '2',
        state: ['active'],
    },
    {
        key: '4',
        id: '4',
        product: "Pila",
        count: '5',
        state: ['active'],
      },
      {
          key: '5',
          id: '5',
          product: "Colador",
          count: '6',
          state: ['active'],
      },
      {
          key: '6',
          id: '6',
          product: "Cargador",
          count: '2',
          state: ['active'],
      },
  ];

  const pagination = {
    pageSize: 5,
    total: data.length
  }
  
export const ListService = () => {
  return (
    <div>
        <Table columns={columns} dataSource={data} pagination={pagination}/>
    </div>
  )
};

