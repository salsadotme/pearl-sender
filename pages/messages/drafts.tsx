import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Button, Space, Table } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import Title from 'antd/lib/typography/Title';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import NavContainer from '../../components/navContainer';

interface Draft {
  id: string;
  title: string;
  createdAt: string;
}

const mockDrafts = [
  {
    id: "1",
    title: "Partnership X Sofia's NFT Club",
    createdAt: "Thu May 5 2022 08:14",
  },
  {
    id: "2",
    title: "Roadmap update",
    createdAt: "Thu May 5 2022 08:14",
  },
  {
    id: "3",
    title: "Holder event at NFT NYC",
    createdAt: "Thu May 5 2022 08:14",
  },
];

const DraftMessages: NextPage = () => {
  const router = useRouter();
  const [drafts, setDrafts] = useState(mockDrafts);

  useEffect(() => {
    // TODO: fetch drafts from backend
  });

  function deleteMessage(id: string) {
  }

  const columns: ColumnsType<Draft> = [
    {
      title: 'Message title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Created',
      dataIndex: 'createdAt',
      key: 'createdAt',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space>
          <Button icon={<EditOutlined />} onClick={() => router.push(`/messages/${record.id}`)}>Edit</Button>
          <Button icon={<DeleteOutlined />}>Delete</Button>
        </Space>
      ),
    },
  ];


  return (
    <NavContainer>
      <Title level={1}>Draft messages</Title>
      <Space direction="vertical" size="large">

        {drafts.length === 0 && <div>
          <p>
            You currently have no draft messages
          </p>
        </div>}
        <Button type="primary" onClick={() => router.push("/messages/new")}>Create a new message</Button>

        {drafts.length !== 0 && <Table columns={columns} dataSource={drafts} />}
      </Space>
    </NavContainer>
  )
}

export default DraftMessages;
