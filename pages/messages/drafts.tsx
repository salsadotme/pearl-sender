import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Button, Space, Table } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import Title from 'antd/lib/typography/Title';
import type { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import NavContainer from '../../components/navContainer';
import { Message, mockMessages } from '../../store';

const DraftMessages: NextPage = () => {
  const router = useRouter();
  const [drafts, setDrafts] = useState(mockMessages.filter(m => !m.sentAt && !m.scheduledFor));

  useEffect(() => {
    // TODO: fetch drafts from backend
  });

  function deleteMessage(id: string) {
  }

  const columns: ColumnsType<Message> = [
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
    <NavContainer selectedTab='drafts'>
      <Title level={1}>Draft messages</Title>
      <Space direction="vertical" size="large">

        {drafts.length === 0 && <div>
          <p>
            You currently have no draft messages
          </p>
        </div>}
        <Button type="primary"><Link href="/messages/new">Create a new message</Link></Button>

        {drafts.length !== 0 && <Table columns={columns} dataSource={drafts} />}
      </Space>
    </NavContainer>
  )
}

export default DraftMessages;
