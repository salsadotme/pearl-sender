import { Button, Modal, Space, Table } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import Title from 'antd/lib/typography/Title';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import NavContainer from '../../components/navContainer';

interface Sent {
  id: string;
  title: string;
  sentAt: string;
}

const mockScheduled = [
  {
    id: "1",
    title: "Partnership X Sofia's NFT Club",
    sentAt: "Thu May 5 2022 08:14",
  },
  {
    id: "2",
    title: "Roadmap update",
    sentAt: "Thu May 5 2022 08:14",
  },
  {
    id: "3",
    title: "Holder event at NFT NYC",
    sentAt: "Thu May 5 2022 08:14",
  },
];

const SentMessages: NextPage = () => {
  const router = useRouter();
  const [scheduled, setScheduled] = useState(mockScheduled);
  const [showModal, setShowModal] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState<Sent>();

  useEffect(() => {
    // TODO: fetch scheduled from backend
  });

  function selectMessage(message: Sent) {
    setSelectedMessage(message);
    setShowModal(true);
  }

  function deleteMessage(id: string) {
  }

  const columns: ColumnsType<Sent> = [
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
      key: 'sentAt',
    },
  ];


  return (
    <NavContainer>
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
        <p>We are excited to share that MovieShots is offering 40 spots and 1 free MovieShots NFT to the Meta Angels community.</p>
        <p>To enter the allowlist raffle (40 spots), click here: https://premint.xyz/meta-angels-x-movieshots/</p>
        <p>🎦About MovieShots🎦</p>
        <p>MovieShots is the first feature film on the blockchain edited into its shots. They are a film collector's item for a new generation of film lovers!</p>
      </Modal>}
    </NavContainer>
  )
}

export default SentMessages;
