import { ClockCircleOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Button, Space, Table } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import Title from 'antd/lib/typography/Title';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import NavContainer from '../../components/navContainer';

interface Scheduled {
  id: string;
  title: string;
  scheduledFor: string;
}

const mockScheduled = [
  {
    id: "1",
    title: "Partnership X Sofia's NFT Club",
    scheduledFor: "Thu May 5 2022 08:14",
  },
  {
    id: "2",
    title: "Roadmap update",
    scheduledFor: "Thu May 5 2022 08:14",
  },
  {
    id: "3",
    title: "Holder event at NFT NYC",
    scheduledFor: "Thu May 5 2022 08:14",
  },
];

const ScheduledMessages: NextPage = () => {
  const router = useRouter();
  const [scheduled, setScheduled] = useState(mockScheduled);

  useEffect(() => {
    // TODO: fetch scheduled from backend
  });

  function deleteMessage(id: string) {
  }

  const columns: ColumnsType<Scheduled> = [
    {
      title: 'Message title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Scheduled for',
      dataIndex: 'scheduledFor',
      render: (_, record) => (
        <Space>
          {record.scheduledFor}
          <Button icon={<ClockCircleOutlined />}>Change</Button>
        </Space>
      ),
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
      <Title level={1}>Scheduled messages</Title>
      <Space direction="vertical" size="large">

        {scheduled.length === 0 && <div>
          <p>
            You currently have no scheduled messages
          </p>
        </div>}
        <Button type="primary" onClick={() => router.push("/messages/new")}>Create a new message</Button>

        {scheduled.length !== 0 && <Table columns={columns} dataSource={scheduled} />}
      </Space>
    </NavContainer>
  )
}

export default ScheduledMessages;
