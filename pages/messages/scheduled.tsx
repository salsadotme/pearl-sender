import { ClockCircleOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Button, Space, Table } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import Title from 'antd/lib/typography/Title';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import NavContainer from '../../components/navContainer';
import ScheduleModal from '../../components/scheduleModal';
import { Message, mockMessages } from '../../store';

const ScheduledMessages: NextPage = () => {
  const router = useRouter();
  const [scheduled, setScheduled] = useState(mockMessages.filter(m => m.scheduledFor));
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
      key: 'title',
    },
    {
      title: 'Scheduled for',
      dataIndex: 'scheduledFor',
      render: (_, record) => (
        <Space>
          {record.scheduledFor}
          <Button icon={<ClockCircleOutlined />} onClick={() => selectMessage(record)}>Change</Button>
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
    <NavContainer selectedTab='scheduled'>
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
      {selectedMessage && <ScheduleModal
        title="Reschedule"
        subTitle={`When would you like to send "${selectedMessage.title}"?`}
        visible={showModal}
        cancel={() => setShowModal(false)}
        send={() => {}}
        updateScheduledTime={() => {}}
      />}
    </NavContainer>
  )
}

export default ScheduledMessages;
