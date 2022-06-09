import { Button, Modal, Space, Table } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import Title from 'antd/lib/typography/Title';
import moment from 'moment';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import NavContainer from '../../components/navContainer';
import { Message, mockMessages } from '../../store';

const SentMessages: NextPage = () => {
  const router = useRouter();
  const [scheduled, setScheduled] = useState(mockMessages.filter(m => m.sentAt));
  const [showModal, setShowModal] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState<Message>();

  useEffect(() => {
    // TODO: fetch scheduled from backend
  });

  function selectMessage(message: Message) {
    setSelectedMessage(message);
    setShowModal(true);
  }

  function deleteMessage(id: string) {
  }

  const columns: ColumnsType<Message> = [
    {
      title: 'Message title',
      dataIndex: 'title',
      render: (_, record) => (
        <Button type="link" onClick={() => selectMessage(record)}>{record.title}</Button>
      ),
    },
    {
      title: 'Sent',
      dataIndex: 'sentAt',
      render: s => moment(s).format('ddd MMM D [at] h:mma'),
    },
  ];


  return (
    <NavContainer selectedTab='sent'>
      <Title level={1}>Sent messages</Title>
      <Space direction="vertical" size="large">

        {scheduled.length === 0 && <div>
          <p>
            You haven't sent any messages yet
          </p>
        </div>}
        <Button type="primary" onClick={() => router.push("/messages/new")}>Create a new message</Button>

        {scheduled.length !== 0 && <Table columns={columns} dataSource={scheduled} />}
      </Space>
      {selectedMessage && <Modal
        title={selectedMessage.title}
        visible={showModal}
        onCancel={() => setShowModal(false)}
        footer={null}
      >
        <p>
          If you are planning to be in NYC on June 23rd for the DeGods event, please fill out this form.
        </p>
        <p>
          This gives our event planner a better idea of how to properly plan for our event @everyone
        </p>
        <p>
          <a>https://forms.gle/BzKXVs3zXSEVKsJEA</a>
        </p>
      </Modal>}
    </NavContainer>
  )
}

export default SentMessages;
